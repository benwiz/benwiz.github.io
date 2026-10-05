export { florenceModel } from './florence-config.js';
import { releaseModelWorker } from './model-lifecycle.js';

let reader, active, modelReady = false, filesPrepared = false, execution = null, releasing, releaseController, releaseFailure, sequence = 0;
export function getFlorenceExecution() { return execution; }
export function isFlorenceReady() { return Boolean(filesPrepared || reader && modelReady); }

export function disposeFlorence(reason = new DOMException('Visual reader stopped.', 'AbortError')) {
  releaseController?.abort(reason);
  const job = active; active = null;
  reader?.terminate(); reader = null; modelReady = false; execution = null;
  if (job) { job.cleanup(); job.reject(reason); }
}

function cancelFlorenceJob(reason) {
  const job = active;
  // Settings preparation streams files only: no ONNX session or GPU device.
  if (job?.prepare) { disposeFlorence(reason); return; }
  active = null;
  if (job) { job.cleanup(); job.reject(reason); }
  // The caller receives cancellation immediately; subsequent work must await
  // disposal rather than overlap a terminated worker's native allocations.
  releaseFlorence().catch(() => {});
}

// Calling this reader follows the user's explicit visual-reader selection/start;
// importing the module never imports a runtime or downloads any model weights.
function requestFlorence(canvas, { signal, onProgress = () => {}, onLoading = () => {}, allowDownload = false }) {
  signal.throwIfAborted();
  if (typeof Worker !== 'function' || typeof WebAssembly !== 'object' || typeof OffscreenCanvas !== 'function')
    return Promise.reject(new Error('Florence requires browser workers, WebAssembly and OffscreenCanvas. Use the OCR pipeline on this browser.'));
  if (releaseFailure) return Promise.reject(releaseFailure);
  if (releasing) return Promise.reject(new Error('Florence is still releasing memory. Wait before starting another model.'));
  if (active) return Promise.reject(new Error('Florence is already reading a capture. Wait for it to finish.'));
  if (canvas && (!canvas.width || !canvas.height)) return Promise.reject(new Error('This capture has no image pixels. Take another frame.'));
  if (!reader) {
    const instance = reader = new Worker(new URL('./florence-worker.js', import.meta.url), { type: 'module' });
    instance.onmessage = ({ data }) => {
      if (reader !== instance) return;
      const job = active; if (!job || job.id !== data.id) return;
      if (data.type === 'image-request') {
        try { job.sendPixels(); } catch (error) { disposeFlorence(error); }
        return;
      }
      if (data.type === 'loading') { job.onLoading(data); return; }
      if (data.type === 'ready') {
        if (!modelReady) job.onProgress(`Florence ready (${data.execution || 'local runtime'})`);
        execution = data.execution || execution; filesPrepared = true; modelReady = data.runtimeInitialized !== false; job.onLoading(null); return;
      }
      if (data.type === 'progress') { job.onProgress(data.message); return; }
      if (data.type === 'error') {
        if (data.needsPreparation) filesPrepared = false;
        const error = new Error(data.needsPreparation ? 'Florence model files are missing from this browser. Open Settings and prepare Florence before reading.' : `Florence could not ${data.phase || 'read this capture'}: ${data.message}. Try again or choose OCR.`);
        error.releaseFailed = Boolean(data.releaseFailed); disposeFlorence(error);
        return;
      }
      active = null; job.cleanup();
      if (data.prepared) { instance.terminate(); reader = null; modelReady = false; }
      job.resolve(data.lines);
    };
    instance.onerror = event => {
      if (reader !== instance) return;
      event.preventDefault?.();
      disposeFlorence(new Error('The Florence runtime could not start. Check your connection and available memory, or choose OCR.'));
    };
    instance.onmessageerror = () => {
      if (reader === instance) disposeFlorence(new Error('The visual reader could not receive this capture. Try another frame.'));
    };
  }
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    const aborted = () => cancelFlorenceJob(signal.reason);
    const timeout = setTimeout(() => cancelFlorenceJob(new Error('Florence loading or reading timed out. Check your connection, or choose OCR.')), 10 * 60 * 1000);
    const cleanup = () => { clearTimeout(timeout); signal.removeEventListener('abort', aborted); onLoading(null); };
    const sendPixels = () => {
      signal.throwIfAborted();
      const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
      reader.postMessage({ id, width: canvas.width, height: canvas.height, pixels, allowDownload: false }, [pixels.buffer]);
    };
    active = { id, resolve, reject, cleanup, onProgress, onLoading, sendPixels, prepare: !canvas };
    signal.addEventListener('abort', aborted, { once: true });
    try {
      // Transfer a copy of the full-resolution pixels, preserving the source
      // canvas for markup/title crops. Only the model processor resizes them.
      if (!canvas) { reader.postMessage({ id, prepare: true, allowDownload }); return; }
      // Load cold ONNX sessions before making another full-frame RGBA copy.
      if (!modelReady) reader.postMessage({ id, initialize: true, allowDownload: false });
      else sendPixels();
    } catch (error) { disposeFlorence(error); }
  });
}

export function prepareFlorence(options) {
  options.signal.throwIfAborted();
  if (releaseFailure) return Promise.reject(releaseFailure);
  if (releasing) return releasing.then(() => prepareFlorence(options));
  return isFlorenceReady() ? Promise.resolve([]) : requestFlorence(null, { ...options, allowDownload: true });
}
export function florenceRead(canvas, options) { return requestFlorence(canvas, options); }

// Normal model switches await native ONNX session release before starting the
// next model. Cancellation remains synchronous through disposeFlorence.
export function releaseFlorence({ timeoutMs } = {}) {
  if (releasing) return releasing;
  if (releaseFailure) return Promise.reject(releaseFailure);
  if (active) return Promise.reject(new Error('Florence is still processing. Stop or finish it before releasing memory.'));
  if (!reader) return Promise.resolve();
  const instance = reader;
  const controller = releaseController = new AbortController();
  releasing = releaseModelWorker(instance, { signal: controller.signal, timeoutMs }).catch(error => {
    releaseFailure = error; throw error;
  }).finally(() => {
    if (reader === instance) { reader = null; modelReady = false; }
    releaseController = null; releasing = null;
  });
  return releasing;
}

// Await only cancellation/disposal already in progress, preserving a warm model
// on unchanged camera scenes. A failed native release remains a stop barrier.
export function waitForFlorenceRelease() {
  return releasing || (releaseFailure ? Promise.reject(releaseFailure) : Promise.resolve());
}
