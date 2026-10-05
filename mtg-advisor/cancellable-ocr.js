// Cancellation terminates OCR rather than waiting for its late result.
export function cancellableOCR(instance, signal, release, timeout = 90000) {
  return {
    setParameters: parameters => instance.setParameters(parameters),
    recognize: (...args) => new Promise((resolve, reject) => {
      signal.throwIfAborted();
      let timer, finished = false;
      const finish = (error, value) => {
        if (finished) return; finished = true;
        clearTimeout(timer); signal.removeEventListener('abort', aborted);
        if (error) reject(error); else resolve(value);
      };
      const stop = error => { finish(error); Promise.resolve().then(release).catch(() => {}); };
      const aborted = () => stop(signal.reason);
      signal.addEventListener('abort', aborted, { once: true });
      timer = setTimeout(() => stop(new Error('OCR took too long. Your capture is saved in Cards for retry.')), timeout);
      Promise.resolve().then(() => { signal.throwIfAborted(); return instance.recognize(...args); }).then(value => finish(null, value), error => finish(error));
    }),
  };
}
