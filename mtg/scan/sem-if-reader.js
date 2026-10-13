export { semIfModel } from './sem-if-config.js';
import { tags } from './decision.js';
import { releaseModelWorker } from './model-lifecycle.js';

let reader, active, releasing, releaseController, releaseFailure, sequence = 0;

export function disposeSemIf(reason = new DOMException('OpenJev labeling stopped.', 'AbortError')) {
  releaseController?.abort(reason);
  const job = active; active = null;
  reader?.terminate(); reader = null;
  if (job) { job.cleanup(); job.reject(reason); }
}

function stopActiveSemIf(reason) {
  const job = active;
  if (!job) return;
  if (job.prepare) { disposeSemIf(reason); return; } // Cache-only downloads have no inference allocations.
  active = null; job.cleanup(); job.reject(reason);
  // Keep the runtime reachable until its queued disposal is acknowledged.
  // The next frame must await releaseSemIf, even after this request rejects.
  releaseSemIf().catch(() => {});
}

// Lazy: neither import nor settings display downloads a runtime/model.
// Caller supplies an explicit unknown option when the task permits abstention.
export function semIfScore({ state, question, options, prepare = false }, { signal, onProgress = () => {}, onStage = () => {} } = {}) {
  signal?.throwIfAborted();
  if (typeof Worker !== 'function' || typeof WebAssembly !== 'object')
    return Promise.reject(new Error('OpenJev needs WebAssembly and browser workers over HTTPS. Choose another labeling pipeline on this browser.'));
  if (releaseFailure) return Promise.reject(releaseFailure);
  if (releasing) return Promise.reject(new Error('OpenJev is still releasing memory. Wait before starting another model.'));
  if (active) return Promise.reject(new Error('OpenJev is already labeling a card. Wait for it to finish.'));
  if (!prepare && (typeof state !== 'string' || !state.trim() || typeof question !== 'string' || !question.trim() ||
      !Array.isArray(options) || options.length < 2 || options.length > 20 || options.some(option => typeof option !== 'string' || !option.trim())))
    return Promise.reject(new Error('OpenJev requires a state, a question and 2–20 named choices.'));
  if (!reader) {
    const instance = reader = new Worker(new URL('./sem-if-worker.js', import.meta.url), { type: 'module' });
    instance.onmessage = ({ data }) => {
      if (reader !== instance) return;
      const job = active; if (!job || data.id !== job.id) return;
      if (data.type === 'stage') { job.onStage({ stage: data.stage, backend: data.backend }); return; }
      if (data.type === 'progress') { job.onProgress(data.message); return; }
      if (data.type === 'error') {
        const error = new Error(`OpenJev could not label this card: ${data.message}`);
        error.releaseFailed = Boolean(data.releaseFailed);
        if (error.releaseFailed) releaseFailure = error;
        disposeSemIf(error); return;
      }
      if (data.type !== 'result') return;
      active = null; job.cleanup(); job.resolve(data.result);
    };
    instance.onerror = event => {
      if (reader !== instance) return;
      event.preventDefault?.();
      disposeSemIf(new Error('The OpenJev runtime could not start. Check your connection and available memory, or choose another pipeline.'));
    };
    instance.onmessageerror = () => {
      if (reader === instance) disposeSemIf(new Error('OpenJev could not receive the card data. Try again.'));
    };
  }
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    const aborted = () => stopActiveSemIf(signal.reason || new DOMException('OpenJev labeling stopped.', 'AbortError'));
    const timeout = setTimeout(() => stopActiveSemIf(new Error('OpenJev loading or labeling timed out. Check your connection or choose another pipeline.')), 10 * 60 * 1000);
    const cleanup = () => { clearTimeout(timeout); signal?.removeEventListener('abort', aborted); };
    active = { id, resolve, reject, cleanup, onProgress, onStage, prepare };
    signal?.addEventListener('abort', aborted, { once: true });
    try { signal?.throwIfAborted(); reader.postMessage({ id, state, question, options, prepare }); }
    catch (error) { disposeSemIf(error); }
  });
}

export async function semIfLabel(card, options = {}) {
  const unknown = 'unknown / insufficient rules';
  const result = await semIfScore({
    state: JSON.stringify({ name: card.name, type: card.type, faces: (card.faces || []).map(({ name, text, type }) => ({ name, text, type })) }),
    question: 'Which single primary Magic card role is best supported by the supplied rules, considering all faces? A clearing spell affects multiple creatures or permanents; spot removal affects an individual threat. Choose unknown / insufficient rules if the supplied rules do not support a listed role.',
    options: [...tags, unknown],
  }, options);
  const winner = result.options.reduce((best, option) => option.probability > best.probability ? option : best);
  const abstained = winner.description === unknown;
  return {
    tags: abstained ? [] : [winner.description], abstained,
    distribution: result.options.map(option => ({ label: option.description, probability: option.probability, token: option.label, logit: option.logit })),
    runtimeModel: result.runtimeModel, inputTokens: result.inputTokens, readouts: result.readouts,
  };
}

export function prepareSemIf(options) { return semIfScore({ prepare: true }, options); }

export function releaseSemIf({ timeoutMs } = {}) {
  if (releasing) return releasing;
  if (releaseFailure) return Promise.reject(releaseFailure);
  if (active) return Promise.reject(new Error('OpenJev is still processing. Stop or finish it before releasing memory.'));
  if (!reader) return Promise.resolve();
  const instance = reader;
  const controller = releaseController = new AbortController();
  releasing = releaseModelWorker(instance, { signal: controller.signal, timeoutMs }).catch(error => {
    error.releaseFailed = true; releaseFailure = error; throw error;
  }).finally(() => {
    if (reader === instance) reader = null;
    releaseController = null; releasing = null;
  });
  return releasing;
}
