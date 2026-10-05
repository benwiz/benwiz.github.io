const reviewModels = new Set(['Qwen2.5-1.5B-Instruct', 'Qwen3.5-0.8B']);

// Preparation workers never generate tokens and never outlive this promise.
// Settings downloads to storage without allocating a GPU model or WASM heap.
export function prepareReviewModel(modelId, { signal, onProgress = () => {} } = {}) {
  signal?.throwIfAborted();
  if (!reviewModels.has(modelId)) return Promise.reject(new Error('Unknown review model.'));
  if (typeof Worker !== 'function') return Promise.reject(new Error('Qwen requires browser workers and WebGPU. Choose another pipeline in Settings.'));
  return new Promise((resolve, reject) => {
    let worker, timeout, settled = false;
    const finish = (error, result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout); signal?.removeEventListener('abort', aborted);
      worker?.terminate();
      if (error) reject(error); else resolve(result);
    };
    const aborted = () => finish(signal.reason || new DOMException('Model preparation stopped.', 'AbortError'));
    try {
      worker = new Worker(new URL('./decision-worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }) => {
        if (settled) return;
        if (data.type === 'progress') { onProgress(data.text); return; }
        if (data.type === 'error') { finish(new Error(data.text || 'Qwen preparation failed.')); return; }
        if (data.type === 'result' && data.advice?.prepared === true) finish(null, { prepared: true, runtimeModel: data.runtimeModel });
      };
      worker.onerror = event => { event.preventDefault?.(); finish(new Error('Qwen could not start. Check browser WebGPU support and available memory.')); };
      worker.onmessageerror = () => finish(new Error('Qwen preparation returned unreadable data.'));
      timeout = setTimeout(() => finish(new Error('Qwen preparation timed out. Retry in Settings.')), 10 * 60 * 1000);
      signal?.addEventListener('abort', aborted, { once: true });
      signal?.throwIfAborted();
      worker.postMessage({ task: 'prepare', modelId });
    } catch (error) { finish(error); }
  });
}
