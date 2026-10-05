import { MLCEngine, hasModelInCache, prebuiltAppConfig } from './vendor/web-llm.js';
import { modelId, inclusionSchema, parseInclusion, checkInclusion, decisionMessages, strategySchema, parseStrategy, strategyMessages, categorySchema, parseCategories, categoryMessages, colorsSchema, parseColors, colorsMessages } from './decision.js';
import { cacheReviewModelFiles, reviewModelFilesCached } from './qwen-model-cache.js';
let engine, runtimeModel, selectedModel, allowDownloads = false;
// WebLLM only registers a pipeline after loading completes. Track devices so
// even a partially initialized engine can release its native allocations.
const gpuDevices = new Set();
if (navigator.gpu) {
  const requestAdapter = navigator.gpu.requestAdapter.bind(navigator.gpu);
  navigator.gpu.requestAdapter = async (...args) => {
    const adapter = await requestAdapter(...args);
    if (!adapter) return adapter;
    return new Proxy(adapter, { get(target, property) {
      if (property === 'requestDevice') return async (...deviceArgs) => {
        const device = await target.requestDevice(...deviceArgs);
        gpuDevices.add(device); return device;
      };
      const value = Reflect.get(target, property, target);
      return typeof value === 'function' ? value.bind(target) : value;
    } });
  };
}
const browserFetch = self.fetch.bind(self);
self.fetch = (input, init) => {
  const url = new URL(typeof input === 'string' ? input : input.url || input.href, self.location.href);
  if (!allowDownloads && url.origin !== self.location.origin)
    throw new Error('Qwen files are missing from browser storage. Prepare this pipeline in Settings before continuing.');
  return browserFetch(input, init);
};
// CacheStorage.add performs its own network request and bypasses self.fetch.
// Guard it as well, including the rare eviction race after cache validation.
if (self.caches) {
  const openCache = self.caches.open.bind(self.caches);
  self.caches.open = async scope => {
    const cache = await openCache(scope);
    if (!scope.startsWith('webllm/')) return cache;
    return new Proxy(cache, { get(target, property) {
      if (property === 'add' || property === 'addAll') return (...args) => {
        if (!allowDownloads) throw new Error('Qwen files are missing from browser storage. Prepare this pipeline in Settings before continuing.');
        return target[property](...args);
      };
      const value = Reflect.get(target, property, target);
      return typeof value === 'function' ? value.bind(target) : value;
    } });
  };
}
async function unloadEngine() {
  const current = engine;
  try { if (current) await current.unload(); }
  finally {
    // GPUDevice.destroy invalidates every buffer owned by the device, including
    // ones allocated before the library had a complete pipeline to dispose.
    const devices = [...gpuDevices];
    for (const device of devices) device.destroy();
    await Promise.all(devices.map(device => device.lost));
    for (const device of devices) gpuDevices.delete(device);
    if (engine === current) engine = null;
  }
}

let jobs = Promise.resolve();
self.onmessage = ({ data }) => {
  // Interrupt generation immediately; disposal itself waits for the running
  // request to leave the engine before releasing its resources.
  if (data.task === 'dispose') engine?.interruptGenerate();
  const job = jobs.then(() => handleRequest(data));
  jobs = job.catch(() => {});
  return job;
};
async function handleRequest(data) {
  if (data.task === 'dispose') {
    try { await unloadEngine(); self.postMessage({ type: 'disposed', id: data.id }); }
    catch (error) { self.postMessage({ type: 'dispose-error', id: data.id, message: error.message }); }
    return;
  }
  try {
    allowDownloads = data.task === 'prepare';
    const requestedModel = data.modelId || modelId;
    if (![modelId, 'Qwen3.5-0.8B'].includes(requestedModel)) throw new Error('Unknown review model');
    if (engine && selectedModel !== requestedModel) { await engine.unload(); engine = null; }
    if (!engine) {
      const adapter = await navigator.gpu?.requestAdapter();
      if (!adapter) throw new Error('No WebGPU adapter');
      selectedModel = requestedModel;
      runtimeModel = `${requestedModel}-${adapter.features.has('shader-f16') ? 'q4f16' : 'q4f32'}_1-MLC`;
      if (allowDownloads) {
        await cacheReviewModelFiles(runtimeModel, prebuiltAppConfig, { onProgress: text => self.postMessage({ type: 'progress', text }) });
        self.postMessage({ type: 'result', advice: { prepared: true }, runtimeModel }); return;
      }
      if (!await reviewModelFilesCached(runtimeModel, prebuiltAppConfig) || !await hasModelInCache(runtimeModel)) throw new Error('Qwen is not prepared on this device. Prepare this pipeline in Settings before continuing.');
      engine = new MLCEngine({
        initProgressCallback: ({ text }) => self.postMessage({ type: 'progress', text }),
      });
      await engine.reload(runtimeModel, { context_window_size: 2048 });
    }
    self.postMessage({ type: 'ready' });
    if (data.task === 'prepare') { self.postMessage({ type: 'result', advice: { prepared: true }, runtimeModel }); return; }
    const colors = data.task === 'colors';
    const category = data.task === 'categories';
    const strategy = data.task === 'strategy';
    const response = await engine.chat.completions.create({
      messages: colors ? colorsMessages(data.context, data.cards) : category ? categoryMessages(data.card) : strategy ? strategyMessages(data.context, data.pool) : decisionMessages(data.card, data.context, data.pool),
      temperature: 0, max_tokens: 300,
      response_format: { type: 'json_object', schema: JSON.stringify(colors ? colorsSchema : category ? categorySchema : strategy ? strategySchema : inclusionSchema) },
    });
    const advice = (colors ? parseColors : category ? parseCategories : strategy ? parseStrategy : parseInclusion)(response.choices[0].message.content);
    if (data.releaseAfterResult) await unloadEngine();
    self.postMessage({ type: 'result', advice: colors || category || strategy ? advice : checkInclusion(advice, data.card, data.context), runtimeModel });
  } catch (error) {
    try { await unloadEngine(); } catch (releaseError) { self.postMessage({ type: 'error', text: `Qwen could not release memory: ${releaseError.message}. Processing stopped.`, releaseFailed: true }); return; }
    self.postMessage({ type: 'error', text: error.message });
  }
}
