// All background captures use one bounded OCR queue. Manual captures move ahead
// of pending automatic work; an in-flight read always finishes or is canceled.
export function quickFrameQueue({ process, onChange = () => {}, onQueued = () => {}, onStarted = () => {}, onCancelled = () => {}, onResult = () => {}, onError = () => {}, capacity = 4 }) {
  const pending = [], idleWaiters = new Set();
  let active = null, running = false, sequence = 0;
  const jobs = () => [...pending, ...(active && !active.controller.signal.aborted ? [active] : [])];
  const size = () => jobs().length;
  const state = () => ({ manualCount: jobs().filter(job => job.kind === 'manual').length, autoCount: jobs().filter(job => job.kind === 'auto').length });
  const changed = () => onChange(size(), state());
  function release(canvas) { canvas.width = canvas.height = 0; }
  async function drain() {
    if (running) return;
    running = true;
    try {
      while (pending.length) {
        const job = pending.shift(); active = job;
        try {
          onStarted({ id: job.id, kind: job.kind });
          const matches = await process(job.canvas, job.controller.signal, { kind: job.kind, id: job.id });
          if (!job.controller.signal.aborted) onResult(matches || [], job.id, { kind: job.kind });
        } catch (error) {
          if (!job.controller.signal.aborted) onError(error, job.id, { kind: job.kind });
        } finally {
          release(job.canvas); active = null; changed();
        }
      }
    } finally { running = false; for (const resolve of idleWaiters) resolve(); idleWaiters.clear(); }
  }
  function cancel(kind) {
    if (active && !active.controller.signal.aborted && (!kind || active.kind === kind)) {
      active.controller.abort(); onCancelled({ kind: active.kind, id: active.id });
    }
    for (let index = pending.length - 1; index >= 0; index--) {
      if (!kind || pending[index].kind === kind) {
        const [job] = pending.splice(index, 1); job.controller.abort(); release(job.canvas); onCancelled({ kind: job.kind, id: job.id });
      }
    }
    changed();
  }
  return {
    idle() { return !running ? Promise.resolve() : new Promise(resolve => idleWaiters.add(resolve)); },
    get count() { return size(); },
    get manualCount() { return state().manualCount; },
    get autoCount() { return state().autoCount; },
    get available() { return size() < capacity; },
    get manualAvailable() { return size() < capacity || pending.some(job => job.kind === 'auto'); },
    enqueue(canvas, { kind = 'manual', recoveryKey } = {}) {
      if (kind === 'manual' && size() >= capacity && pending.some(job => job.kind === 'auto')) cancel('auto');
      if (size() >= capacity || (kind === 'auto' && state().autoCount)) { release(canvas); return null; }
      const id = ++sequence, job = { id, kind, canvas, controller: new AbortController(), recoveryKey };
      if (kind === 'auto') pending.push(job);
      else { const autoIndex = pending.findIndex(queued => queued.kind === 'auto'); pending.splice(autoIndex < 0 ? pending.length : autoIndex, 0, job); }
      changed(); onQueued({ id, kind, canvas, ...(recoveryKey ? { recoveryKey } : {}) }); drain(); return id;
    },
    cancel: () => cancel(),
    cancelAuto: () => cancel('auto'),
  };
}
