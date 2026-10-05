// Matches the pinned WebLLM ArtifactCache layout. Settings populates files
// sequentially without creating a model engine, WASM heap, or GPU allocation.
function modelRecord(runtimeModel, appConfig) {
  const record = appConfig.model_list.find(model => model.model_id === runtimeModel);
  if (!record) throw new Error('Unknown Qwen runtime model.');
  let base = record.model.endsWith('/') ? record.model : `${record.model}/`;
  if (!/.+\/resolve\/.+\//.test(base)) base += 'resolve/main/';
  return { record, base };
}

export async function cacheReviewModelFiles(runtimeModel, appConfig, { onProgress = () => {}, signal } = {}) {
  if (appConfig.cacheBackend && appConfig.cacheBackend !== 'cache') throw new Error('This model preparation requires the default browser cache.');
  const { record, base } = modelRecord(runtimeModel, appConfig);
  const configCache = await caches.open('webllm/config');
  const modelCache = await caches.open('webllm/model');
  const wasmCache = await caches.open('webllm/wasm');
  const ensure = async (cache, url) => {
    signal?.throwIfAborted();
    const request = new Request(url, signal ? { signal } : undefined);
    if (!await cache.match(request)) await cache.add(request);
    signal?.throwIfAborted();
    return cache.match(request);
  };
  onProgress('Downloading Qwen configuration…');
  const config = await (await ensure(configCache, new URL('mlc-chat-config.json', base).href)).json();
  const tokenizer = config.tokenizer_files?.includes('tokenizer.json') ? 'tokenizer.json' : config.tokenizer_files?.includes('tokenizer.model') ? 'tokenizer.model' : null;
  if (!tokenizer) throw new Error('Qwen configuration has no supported tokenizer.');
  await ensure(modelCache, new URL(tokenizer, base).href);
  await ensure(wasmCache, record.model_lib);
  const manifest = await (await ensure(modelCache, new URL('tensor-cache.json', base).href)).json();
  if (!Array.isArray(manifest.records) || !manifest.records.length) throw new Error('Qwen weight manifest is invalid.');
  const total = manifest.records.reduce((sum, shard) => sum + (shard.nbytes || 0), 0);
  let complete = 0;
  for (const shard of manifest.records) {
    if (typeof shard.dataPath !== 'string') throw new Error('Qwen weight manifest is invalid.');
    await ensure(modelCache, new URL(shard.dataPath, base).href);
    complete += shard.nbytes || 0;
    onProgress(total ? `Qwen model files: ${Math.round(100 * complete / total)}% downloaded or read from cache` : 'Downloading Qwen model files…');
  }
}

export async function reviewModelFilesCached(runtimeModel, appConfig) {
  const { record, base } = modelRecord(runtimeModel, appConfig);
  const configCache = await caches.open('webllm/config');
  const modelCache = await caches.open('webllm/model');
  const wasmCache = await caches.open('webllm/wasm');
  const configResponse = await configCache.match(new URL('mlc-chat-config.json', base).href);
  const manifestResponse = await modelCache.match(new URL('tensor-cache.json', base).href);
  if (!configResponse || !manifestResponse || !await wasmCache.match(record.model_lib)) return false;
  const config = await configResponse.json();
  const tokenizer = config.tokenizer_files?.includes('tokenizer.json') ? 'tokenizer.json' : config.tokenizer_files?.includes('tokenizer.model') ? 'tokenizer.model' : null;
  if (!tokenizer || !await modelCache.match(new URL(tokenizer, base).href)) return false;
  const manifest = await manifestResponse.json();
  if (!Array.isArray(manifest.records) || !manifest.records.length) return false;
  // Keys avoid reading or materializing any shard body during validation.
  const urls = new Set((await modelCache.keys()).map(request => request.url));
  return manifest.records.every(shard => typeof shard.dataPath === 'string' && urls.has(new URL(shard.dataPath, base).href));
}
