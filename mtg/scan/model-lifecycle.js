let disposalSequence = 0;
const disposals = new WeakMap();

// Termination alone can strand native GPU allocations until browser cleanup.
// Only an acknowledged library unload allows the caller to start another stack.
export function releaseModelWorker(worker, { signal, timeoutMs = 15_000 } = {}) {
  if (!worker) return Promise.resolve();
  const existing = disposals.get(worker);
  if (existing) return existing;
  const pending = new Promise((resolve, reject) => {
    let timer, settled = false;
    const id = `dispose-${++disposalSequence}`;
    const finish = error => {
      if (settled) return; settled = true;
      clearTimeout(timer); signal?.removeEventListener('abort', aborted);
      worker.removeEventListener('message', message); worker.removeEventListener('error', failed);
      worker.terminate();
      if (error) reject(error); else resolve();
    };
    const aborted = () => finish(signal.reason || new DOMException('Model release stopped.', 'AbortError'));
    const failed = () => finish(new Error('The model runtime failed while releasing memory. Processing stopped.'));
    const message = ({ data }) => {
      if (data.id !== id) return;
      if (data.type === 'disposed') finish();
      else if (data.type === 'dispose-error') finish(new Error(`The model could not release memory: ${data.message || 'unknown runtime error'}. Processing stopped.`));
    };
    try {
      worker.addEventListener('message', message); worker.addEventListener('error', failed);
      signal?.addEventListener('abort', aborted, { once: true }); signal?.throwIfAborted();
      timer = setTimeout(() => finish(new Error('Releasing model memory timed out. Processing stopped; reload the page before trying another model.')), timeoutMs);
      worker.postMessage({ task: 'dispose', id });
    } catch (error) { finish(error); }
  });
  disposals.set(worker, pending);
  return pending;
}
