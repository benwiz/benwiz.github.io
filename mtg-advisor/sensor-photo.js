// ImageCapture does not accept an AbortSignal. Bound the wait and ignore a late
// result after cancellation; the browser still owns its outstanding exposure.
function cameraCall(call, signal, timeoutMs, message) {
  signal.throwIfAborted();
  return new Promise((resolve, reject) => {
    let timeout;
    const cleanup = () => { clearTimeout(timeout); signal.removeEventListener('abort', aborted); };
    const finish = fn => value => { cleanup(); fn(value); };
    const done = finish(resolve), failed = finish(reject);
    const aborted = () => failed(signal.reason);
    signal.addEventListener('abort', aborted, { once: true });
    timeout = setTimeout(() => failed(new DOMException(message, 'TimeoutError')), timeoutMs);
    Promise.resolve().then(() => { signal.throwIfAborted(); return call(); }).then(done, failed);
  });
}

function requireLiveCamera(camera) {
  if (typeof camera?.takePhoto !== 'function') throw new DOMException('This browser session does not expose sensor photo capture.', 'NotSupportedError');
  if (camera.track?.readyState === 'ended') throw new DOMException('Camera track ended. Resume the camera before taking a sensor photo.', 'InvalidStateError');
  if (camera.track?.muted || camera.track?.enabled === false) throw new DOMException('Camera track is muted. Resume the camera before taking a sensor photo.', 'NotReadableError');
}

// Some cameras reject maximum dimensions but accept a default exposure. Both
// attempts use takePhoto; a failure never falls back to copied video pixels.
export async function takeSensorExposure(camera, signal, { capabilitiesTimeoutMs = 2000, exposureTimeoutMs = 12000 } = {}) {
  signal.throwIfAborted();
  requireLiveCamera(camera);
  let capabilities;
  try {
    if (typeof camera.getPhotoCapabilities === 'function') capabilities = await cameraCall(
      () => camera.getPhotoCapabilities(), signal, capabilitiesTimeoutMs, 'Camera did not report photo capabilities.');
  }
  catch { /* Photo capabilities are optional; a default exposure may still work. */ }
  signal.throwIfAborted();
  requireLiveCamera(camera);
  const settings = {};
  for (const key of ['imageWidth', 'imageHeight']) {
    if (Number.isFinite(capabilities?.[key]?.max) && capabilities[key].max > 0) settings[key] = capabilities[key].max;
  }
  let photo;
  const hasSettings = Object.keys(settings).length > 0;
  const exposure = requested => cameraCall(() => requested ? camera.takePhoto(settings) : camera.takePhoto(),
    signal, exposureTimeoutMs, 'Sensor photo timed out. Flip or restart the camera before retrying.');
  try { photo = await exposure(hasSettings); }
  catch (error) {
    signal.throwIfAborted();
    if (!hasSettings || ['NotAllowedError', 'SecurityError', 'InvalidStateError', 'NotReadableError', 'AbortError', 'TimeoutError'].includes(error.name)) throw error;
    requireLiveCamera(camera);
    photo = await exposure(false);
  }
  signal.throwIfAborted();
  return photo;
}
