import { florenceModel } from './florence-config.js';
import { cacheFlorenceFiles, florenceBackend } from './florence-cache.js';

let runtime, model, processor, execution;
// HF registers the model only after all ONNX sessions initialize. Track devices
// before importing ONNX so failed partial initialization can still release GPU
// buffers that never became reachable through model.dispose().
const gpuDevices = new Set(), pendingDevices = new Set();
let gpuReleasing = false, runtimeReleaseError;
if (navigator.gpu) {
  const requestAdapter = navigator.gpu.requestAdapter.bind(navigator.gpu);
  navigator.gpu.requestAdapter = async (...args) => {
    const adapter = await requestAdapter(...args);
    if (!adapter) return adapter;
    return new Proxy(adapter, { get(target, property) {
      if (property === 'requestDevice') return async (...deviceArgs) => {
        if (gpuReleasing) throw new Error('Florence GPU memory is being released.');
        const pending = target.requestDevice(...deviceArgs);
        pendingDevices.add(pending);
        try { const device = await pending; gpuDevices.add(device); return device; }
        finally { pendingDevices.delete(pending); }
      };
      const value = Reflect.get(target, property, target);
      return typeof value === 'function' ? value.bind(target) : value;
    } });
  };
}
async function releaseRuntime() {
  if (runtimeReleaseError) throw runtimeReleaseError;
  gpuReleasing = true;
  try {
    try { await model?.dispose(); }
    finally {
      await Promise.allSettled([...pendingDevices]);
      const devices = [...gpuDevices];
      for (const device of devices) device.destroy();
      await Promise.all(devices.map(device => device.lost));
      gpuDevices.clear(); model = processor = null;
    }
  } catch (error) { runtimeReleaseError = error; throw error; }
}

async function load(id, allowDownload) {
  if (model && processor) return;
  self.postMessage({ id, type: 'loading', stage: 'runtime', message: allowDownload ? `Preparing Florence · ${florenceModel.downloadLabel}` : 'Preparing cached Florence runtime…' });
  runtime ??= await import(florenceModel.runtime);
  // HF rejects local_files_only before checking cache if local access is
  // disabled. Enable its cache-only path for capture; remote fetches remain
  // prohibited by local_files_only on both loaders.
  runtime.env.allowLocalModels = !allowDownload;
  // SharedArrayBuffer/cross-origin isolation are unnecessary for one WASM thread.
  runtime.env.backends.onnx.wasm.numThreads = 1;
  execution = await florenceBackend();
  self.postMessage({ id, type: 'loading', stage: 'initializing', execution,
    message: `Loading Florence model files (${execution})…` });
  const files = new Map();
  let lastLoadingUpdate = 0;
  const progress_callback = progress => {
    if (progress.status !== 'progress') return;
    files.set(progress.file, Number(progress.loaded) || 0);
    if (performance.now() - lastLoadingUpdate < 250 && progress.progress !== 100) return;
    lastLoadingUpdate = performance.now();
    const megabytes = Math.round([...files.values()].reduce((sum, loaded) => sum + loaded, 0) / 1_000_000);
    // HF reports identical progress for cache reads and downloads. Do not claim
    // a new download or restart a per-file percentage for an installed model.
    self.postMessage({ id, type: 'loading', stage: 'loading-files', execution,
      message: `Loading Florence model files · ${megabytes} MB read (${execution})…` });
  };
  [model, processor] = await Promise.all([
    runtime.Florence2ForConditionalGeneration.from_pretrained(florenceModel.id, {
      local_files_only: !allowDownload, device: execution === 'WebGPU' ? 'webgpu' : florenceModel.device,
      dtype: execution === 'WebGPU' ? { embed_tokens: 'fp16', vision_encoder: 'fp16', encoder_model: 'q4', decoder_model_merged: 'q4' } : florenceModel.dtype, revision: florenceModel.revision, progress_callback,
    }),
    runtime.AutoProcessor.from_pretrained(florenceModel.id, { revision: florenceModel.revision, local_files_only: !allowDownload, progress_callback }),
  ]);
}

let jobs = Promise.resolve();
self.onmessage = ({ data }) => {
  const job = jobs.then(() => handleRequest(data));
  jobs = job.catch(() => {});
  return job;
};
async function handleRequest({ id, task, width, height, pixels, prepare, initialize, allowDownload = false }) {
  if (task === 'dispose') {
    try {
      await releaseRuntime();
      self.postMessage({ id, type: 'disposed' });
    } catch (error) { self.postMessage({ id, type: 'dispose-error', message: error.message || String(error) }); }
    return;
  }
  let phase = 'load the model', inputs, generated, heartbeat;
  const releaseInputs = () => {
    let failure;
    for (const value of [...Object.values(inputs || {}), generated]) {
      try { value?.dispose?.(); } catch (error) { failure ||= error; }
    }
    inputs = generated = null;
    if (failure) throw failure;
  };
  try {
    if (prepare) {
      execution = await florenceBackend();
      await cacheFlorenceFiles(execution, { onProgress: progress => self.postMessage({ id, type: 'loading', ...progress }) });
      self.postMessage({ id, type: 'ready', execution, runtimeInitialized: false });
      self.postMessage({ id, type: 'result', lines: [], prepared: true }); return;
    }
    await load(id, false);
    self.postMessage({ id, type: 'ready', execution });
    if (initialize) { self.postMessage({ id, type: 'image-request' }); return; }
    phase = 'read this capture';
    self.postMessage({ id, type: 'progress', message: `Florence is reading this frame (${execution})…` });
    let image = new runtime.RawImage(pixels, width, height, 4);
    pixels = null; // RawImage owns the transferred source until preprocessing.
    const prompts = processor.construct_prompts(florenceModel.task);
    inputs = await processor(image, prompts);
    const imageSize = image.size; image = null; // Release source RGBA before large inference activations.
    let tokens = 0, lastReport = 0;
    const started = performance.now();
    const report = () => self.postMessage({ id, type: 'progress', message:
      `Florence ${tokens ? `decoding · ${tokens} tokens` : 'processing image'} (${execution}) · ${Math.round((performance.now() - started) / 1000)}s…` });
    // Encoding can take substantially longer than decoding on CPU. A heartbeat
    // makes that stage visible while the worker awaits the native runtime.
    heartbeat = setInterval(report, 2000);
    const streamer = new runtime.TextStreamer(processor.tokenizer, { skip_prompt: true,
      callback_function: () => {}, token_callback_function: value => {
        tokens += value.length;
        // WASM may occupy the worker event loop, delaying timers. Token
        // callbacks still expose real decoding progress as it completes.
        if (performance.now() - lastReport >= 2000) { lastReport = performance.now(); report(); }
      },
    });
    generated = await model.generate({ ...inputs, max_new_tokens: width / height > 3 ? 96 : 768, do_sample: false, num_beams: 1, streamer });
    const text = processor.batch_decode(generated, { skip_special_tokens: false })[0];
    // The official processor maps quantized coordinates to image.size (the
    // original capture dimensions), not its internal model input dimensions.
    const result = processor.post_process_generation(text, florenceModel.task, imageSize)[florenceModel.task];
    if (!Array.isArray(result?.labels) || !Array.isArray(result?.quad_boxes))
      throw new Error('The released reader returned an unsupported OCR result');
    const lines = result.labels.flatMap((label, index) => {
      const box = result.quad_boxes[index];
      if (typeof label !== 'string' || !label.trim() || !Array.isArray(box) || box.length !== 8 || !box.every(Number.isFinite)) return [];
      const xs = [box[0], box[2], box[4], box[6]], ys = [box[1], box[3], box[5], box[7]];
      const x0 = Math.max(0, Math.min(width, Math.min(...xs))), x1 = Math.max(0, Math.min(width, Math.max(...xs)));
      const y0 = Math.max(0, Math.min(height, Math.min(...ys))), y1 = Math.max(0, Math.min(height, Math.max(...ys)));
      return x1 > x0 && y1 > y0 ? [{ text: label.trim(), bbox: { x0, y0, x1, y1 } }] : [];
    });
    releaseInputs();
    self.postMessage({ id, type: 'result', lines });
  } catch (error) {
    clearInterval(heartbeat);
    // Release caller tensors before sessions/devices, and acknowledge cleanup
    // before the reader terminates this failed worker or starts another stack.
    let releaseFailed = false, message = error.message || String(error);
    try { releaseInputs(); } catch (releaseError) { releaseFailed = true; message += `; releasing Florence tensors failed: ${releaseError.message || releaseError}`; }
    try { await releaseRuntime(); }
    catch (releaseError) { releaseFailed = true; message += `; releasing Florence memory failed: ${releaseError.message || releaseError}`; }
    self.postMessage({ id, type: 'error', phase, releaseFailed,
      needsPreparation: !allowDownload && /local_files_only|not found locally/.test(error.message || ''), message });
  }
  finally {
    clearInterval(heartbeat);
    try { releaseInputs(); } catch { /* Error cleanup already reported its failure. */ }
  }
};
