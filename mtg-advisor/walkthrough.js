import { detectTitleRegions } from './perception.js';
import { takeSensorExposure } from './sensor-photo.js';
import { titleBoxes } from './camera-boxes.js';

export function previewCrop(width, height, viewWidth, viewHeight) {
  const scale = Math.max(viewWidth / width, viewHeight / height);
  const cropWidth = viewWidth / scale, cropHeight = viewHeight / scale;
  return { x: (width - cropWidth) / 2, y: (height - cropHeight) / 2,
    width: cropWidth, height: cropHeight };
}

export function frameDifference(previous, current) {
  if (!previous || previous.length !== current.length) return Infinity;
  let difference = 0;
  for (let i = 0; i < current.length; i += 4)
    difference += (Math.abs(current[i] - previous[i]) + Math.abs(current[i + 1] - previous[i + 1]) + Math.abs(current[i + 2] - previous[i + 2])) / 3;
  return difference / (current.length / 4);
}

// A relative focus score used only to choose among frames from this round.
export function frameSharpness(pixels, width, height) {
  let sum = 0, squared = 0, count = 0;
  const gray = i => (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
  for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
    const i = (y * width + x) * 4;
    const value = 4 * gray(i) - gray(i - 4) - gray(i + 4) - gray(i - width * 4) - gray(i + width * 4);
    sum += value; squared += value * value; count++;
  }
  return count ? Math.max(0, squared / count - (sum / count) ** 2) : 0;
}

// Compare against analyzed pixels, not the preceding preview sample. A small
// replaced card can hide in the whole-scene mean, so inspect local tiles too.
export function sceneChanged(reference, candidate) {
  if (!reference || reference.dimensions !== candidate.dimensions) return true;
  if (frameDifference(reference.pixels, candidate.pixels) > 6) return true;
  const { pixels, width, height } = candidate;
  for (let y = 0; y < height; y += 8) for (let x = 0; x < width; x += 8) {
    let difference = 0, count = 0;
    for (let dy = y; dy < Math.min(y + 8, height); dy++) for (let dx = x; dx < Math.min(x + 8, width); dx++) {
      const i = (dy * width + dx) * 4;
      for (let c = 0; c < 3; c++) { difference += Math.abs(pixels[i+c] - reference.pixels[i+c]); count++; }
    }
    if (difference / count > 12) return true;
  }
  if (reference.titles.length !== candidate.titles.length) return true;
  const available = new Set(reference.titles);
  return candidate.titles.some(title => {
    const previous = [...available].sort((a, b) => Math.hypot(a.x-title.x, a.y-title.y) - Math.hypot(b.x-title.x, b.y-title.y))[0];
    available.delete(previous);
    return Math.abs(title.x - previous.x) > .04 || Math.abs(title.y - previous.y) > .04
      || Math.abs(title.width - previous.width) > .04 || Math.abs(title.height - previous.height) > .025
      || Math.abs(title.angle - previous.angle) > .12 || frameDifference(previous.pixels, title.pixels) > 10;
  });
}

export function autoCaptureDue({ enabled = true, pendingQuick = 0, pendingAuto = 0 } = {}) {
  return enabled && !pendingQuick && !pendingAuto;
}

export function autoCaptureFeedback({ enabled = true, pendingQuick = 0, pendingAuto = 0 } = {}) {
  if (pendingQuick || pendingAuto) return { state: 'processing', progress: 0,
    message: 'Analyzing captured frame. Tap Capture, or wait for the next automatic capture.' };
  if (!enabled) return { state: 'off', progress: 0, message: 'Auto scan off. Tap Capture or take a photo.' };
  return { state: 'ready', progress: 0, message: 'Capturing the next frame…' };
}

export function scaleLiveRegions(regions, width, height, fullWidth, fullHeight) {
  const sx = fullWidth / width, sy = fullHeight / height;
  return regions.map(region => ({ ...region,
    x0: region.x0 * sx, x1: region.x1 * sx, cx: region.cx * sx, width: region.width * sx,
    y0: region.y0 * sy, y1: region.y1 * sy, cy: region.cy * sy, height: region.height * sy,
    angle: Math.atan2(Math.sin(region.angle) * sy, Math.cos(region.angle) * sx),
  }));
}

export function walkthrough({ video, still, stage, start, pause, close, flip, native, snapshot, quick, quickCount, auto, sensor, sensorSupport, fallback, file, sourceLabel, steady, boxes, acknowledgment,
  onStatus, onEntering, onLeaving, onStart, readPhoto, queueFrame, queueAutoFrame, queueAvailable, cancelQuick, cancelAuto }) {
  let sensorIssue = 'Camera is not running.', photoCamera, stream, run, timer, generation = 0, facing = 'environment', deviceId, opening = false;
  let greenUntil = 0;
  let pendingQuick = 0, pendingAuto = 0, autoGeneration = null, foreground = false;
  let busyToken = null;
  let capturedView = null, liveGeometry = null;
  const overlay = titleBoxes(boxes);
  const automatic = () => auto?.checked !== false;
  function probePixels(source) {
    const probe = document.createElement('canvas'); probe.width = 64; probe.height = 48;
    try {
      const context = probe.getContext('2d'); context.drawImage(source, 0, 0, 64, 48);
      return context.getImageData(0, 0, 64, 48).data;
    } finally { probe.width = probe.height = 0; }
  }
  function sameCapturedView(pixels) {
    if (!capturedView?.valid) return false;
    const reference = { pixels: capturedView.pixels, width: 64, height: 48, dimensions: 'probe', titles: [] };
    return !sceneChanged(reference, { ...reference, pixels });
  }
  function checkCapturedView() {
    if (capturedView?.valid && (Math.abs(video.videoWidth / video.videoHeight - capturedView.aspect) > .01 || !sameCapturedView(probePixels(video)))) {
      capturedView.valid = false; overlay.clear(); delete stage.dataset.captureOutline;
    }
    if (acknowledgment && capturedView && performance.now() >= capturedView.at + 2000) acknowledgment.hidden = true;
  }
  function frameQueued({ id, kind = 'manual', canvas, fingerprint } = {}) {
    if (!id || !canvas || !stream || stage.dataset.phase !== 'aiming') return;
    const geometry = fingerprint || liveGeometry;
    const regions = geometry ? scaleLiveRegions(geometry.regions || [], geometry.sourceWidth, geometry.sourceHeight, canvas.width, canvas.height) : [];
    capturedView = { id, kind, at: performance.now(), valid: true, aspect: canvas.width / canvas.height, pixels: probePixels(canvas) };
    overlay.captured(regions, canvas.width, canvas.height);
    stage.dataset.captureOutline = regions.length ? 'titles' : 'full-frame';
    stage.dataset.capturedFrameId = String(id);
    stage.dataset.captureAcknowledgment = 'Captured. You can move on. Analyzing in background.';
    stage.dataset.captureAckUntil = String(capturedView.at + 1500);
    if (acknowledgment) { acknowledgment.textContent = 'Captured. You can move on.'; acknowledgment.hidden = false; }
    stage.dataset.autoState = 'captured'; steady.value = 0; onStatus(stage.dataset.captureAcknowledgment);
  }
  function feedback(options = {}) {
    if (capturedView && performance.now() < capturedView.at + 1500) {
      stage.dataset.autoState = 'captured'; steady.value = 0; onStatus(stage.dataset.captureAcknowledgment); return;
    }
    const result = autoCaptureFeedback({ enabled: automatic(), pendingQuick, pendingAuto, ...options });
    stage.dataset.autoState = result.state; steady.value = result.progress; onStatus(result.message);
  }
  function phase(value) {
    stage.dataset.phase = value; stage.dataset.autoScan = String(automatic());
    const ready = Boolean(stream && video.readyState >= 2 && ['aiming', 'reading', 'review'].includes(value));
    snapshot.disabled = !ready || foreground;
    quick.disabled = !ready || !queueAvailable();
    sensor.disabled = !ready || foreground;
    sensorSupport.textContent = photoCamera ? 'Sensor photo' : 'Sensor unavailable';
    sensor.setAttribute('aria-label', photoCamera ? 'Take sensor photo' : 'Why sensor photo is unavailable');
    sensor.title = photoCamera ? 'Take a sensor exposure without opening the native camera' : sensorIssue;
  }
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--camera-controls-height', `${pause.parentElement.offsetHeight}px`);
  }).observe(pause.parentElement);
  new ResizeObserver(() => {
    if (stage.dataset.phase === 'aiming') { overlay.clear(); }
  }).observe(video);
  function stop(keepStage = false) {
    generation++;
    clearTimeout(timer); run?.abort(); run = null; cancelAuto(); pendingAuto = 0;
    opening = false; foreground = false; greenUntil = 0;
    capturedView = liveGeometry = null; delete stage.dataset.captureAcknowledgment; delete stage.dataset.captureAckUntil; delete stage.dataset.captureOutline; delete stage.dataset.capturedFrameId;
    if (acknowledgment) acknowledgment.hidden = true;
    video.pause();
    if (stream) for (const track of stream.getTracks()) track.stop();
    stream = null; photoCamera = null; video.srcObject = null;
    overlay.clear(); steady.value = 0; sourceLabel.hidden = true;
    start.disabled = false; start.textContent = 'Resume camera';
    pause.setAttribute('aria-label', 'Resume camera'); pause.querySelector('path').setAttribute('d', 'M8 4l12 8-12 8z');
    phase('paused');
    if (!keepStage) { stage.hidden = true; still.hidden = true; onLeaving(); }
  }
  function frame(source, width, height, limit) {
    const canvas = document.createElement('canvas');
    const scale = Math.min(1, limit / Math.max(width, height));
    canvas.width = Math.max(1, Math.round(width * scale)); canvas.height = Math.max(1, Math.round(height * scale));
    canvas.getContext('2d').drawImage(source, 0, 0, canvas.width, canvas.height);
    return canvas;
  }
  function resetAim() {
    steady.value = 0;
    if (!capturedView?.valid) overlay.clear();
    still.hidden = true; sourceLabel.hidden = true; phase('aiming'); feedback();
  }
  function queueAutomatic(token, signal, canvas) {
    if (token !== generation || signal.aborted || !autoCaptureDue({ enabled: automatic(), pendingQuick, pendingAuto }) || stage.dataset.phase !== 'aiming' || video.readyState < 2) return false;
    autoGeneration = token;
    const id = queueAutoFrame(canvas);
    if (!id) { autoGeneration = null; return true; }
    pendingAuto = 1; stage.dataset.autoPending = String(id);
    stage.dataset.autoSubmitted = String(Number(stage.dataset.autoSubmitted || 0) + 1);
    stage.dataset.captureKind = 'video-still'; stage.dataset.captureWidth = canvas.width; stage.dataset.captureHeight = canvas.height;
    // Snapshot first. Geometry is filled in from this capture's recognition pass.
    frameQueued({ id, kind: 'auto', canvas, fingerprint: { regions: [], sourceWidth: canvas.width, sourceHeight: canvas.height } });
    feedback(); return true;
  }
  function frameCompleted({ kind, cancelled }) {
    if (kind !== 'auto') return;
    const token = autoGeneration;
    autoGeneration = null; pendingAuto = 0; stage.dataset.autoPending = '';
    if (cancelled || token !== generation) return;
    stage.dataset.autoCompleted = String(Number(stage.dataset.autoCompleted || 0) + 1);
    resetAim();
  }
  async function sensorPhoto(token, signal) {
    const camera = photoCamera;
    if (typeof camera?.takePhoto !== 'function') throw new Error('Sensor photo unavailable');
    const photo = await takeSensorExposure(camera, signal);
    signal.throwIfAborted(); if (token !== generation) return;
    const url = URL.createObjectURL(photo);
    try {
      const image = new Image(); image.src = url; await image.decode();
      signal.throwIfAborted(); if (token !== generation) return;
      return frame(image, image.naturalWidth, image.naturalHeight, 2200);
    } finally { URL.revokeObjectURL(url); }
  }
  async function captureInPage(kind) {
    if (!['aiming', 'reading', 'review'].includes(stage.dataset.phase) || video.readyState < 2 || !run) return;
    // Cancel geometry work so automatic capture cannot race the tapped shot.
    generation++; clearTimeout(timer); run.abort(); cancelAuto(); run = new AbortController();
    const token = generation, signal = run.signal;
    foreground = true; phase('reading');
    let canvas;
    try {
      if (kind === 'sensor-photo') {
        canvas = await sensorPhoto(token, signal);
      } else {
        canvas = frame(video, video.videoWidth, video.videoHeight, 1920);
      }
      signal.throwIfAborted(); if (token !== generation || !canvas) return;
      video.pause(); overlay.clear(); phase('photo');
      stage.dataset.captureKind = kind;
      stage.dataset.captureWidth = canvas.width; stage.dataset.captureHeight = canvas.height;
      await readPhoto(canvas, signal, kind); signal.throwIfAborted();
    } catch (error) {
      if (signal.aborted || token !== generation) return;
      foreground = false;
      if (kind === 'sensor-photo') { sensorIssue = `${error.name || 'Error'}: ${error.message}`; stage.dataset.sensorError = sensorIssue; }
      onStatus(kind === 'sensor-photo' ? `Sensor photo failed (${error.name || 'Error'}): ${error.message}. You can retry or use Native camera.` : 'Frame could not be read. Try another shot.', true);
      // Keep the error visible; sensor remains available for an explicit retry.
      timer = setTimeout(async () => {
        if (token !== generation || signal.aborted) return;
        await resumeLive();
      }, 2000);
      return;
    } finally { if (canvas) canvas.width = canvas.height = 0; }
    if (token === generation && !signal.aborted) {
      if (stream && stream.getVideoTracks().some(track => track.readyState !== 'ended')) await resumeLive();
      else { stop(); begin(); }
    }
  }
  auto?.addEventListener('change', () => {
    stage.dataset.autoScan = String(automatic());
    if (!stream || foreground || !['aiming', 'reading', 'review'].includes(stage.dataset.phase)) return;
    // Abandon automatic work, preserving the live stream and priority snapshots.
    generation++; clearTimeout(timer); run?.abort(); cancelAuto(); run = new AbortController();
    resetAim(); sample(generation, run.signal);
  });
  snapshot.addEventListener('click', () => captureInPage('video-still'));
  sensor.addEventListener('click', () => {
    if (!photoCamera) { onStatus(sensorIssue, true); return; }
    return captureInPage('sensor-photo');
  });
  quick.addEventListener('click', () => {
    if (quick.disabled || !stream || video.readyState < 2 || !queueAvailable()) return;
    queueFrame(frame(video, video.videoWidth, video.videoHeight, 1920));
  });
  function updateQuick(count, autoCount = 0) {
    pendingAuto = autoCount;
    pendingQuick = count;
    quickCount.textContent = count ? String(count) : '';
    quickCount.hidden = !count;
    stage.dataset.quickPending = count;
    phase(stage.dataset.phase);
    if (!count && !autoCount && run && stage.dataset.phase === 'aiming') { clearTimeout(timer); const token = generation, signal = run.signal; timer = setTimeout(() => sample(token, signal), 1000); }
  }
  function openNative() {
    // Release the web camera before iOS opens its camera. Keep the file click
    // synchronous with the tap so Safari retains the required user activation.
    stop(true); stage.hidden = false; onEntering(); phase('native');
    run = new AbortController(); sourceLabel.hidden = true; still.hidden = true;
    onStatus('Take a photo. Reading starts when you return.');
    file.value = ''; file.click();
  }
  async function nativeReturned() {
    if (stage.dataset.phase !== 'native') return;
    const photo = file.files[0];
    if (!photo) { stop(); begin(); return; }
    const token = generation, signal = run.signal;
    phase('photo');
    let url, canvas;
    try {
      if (photo.size > 30 * 1024 * 1024) throw new Error('Photo too large');
      url = URL.createObjectURL(photo);
      const image = new Image(); image.src = url; await image.decode(); signal.throwIfAborted();
      canvas = frame(image, image.naturalWidth, image.naturalHeight, 2200);
      stage.dataset.captureKind = 'native-photo'; stage.dataset.captureWidth = canvas.width; stage.dataset.captureHeight = canvas.height;
      await readPhoto(canvas, signal, 'native-photo'); signal.throwIfAborted();
    } catch (error) {
      if (signal.aborted) return;
      onStatus('That photo couldn’t be read. Try another shot.', true);
      await new Promise(resolve => {
        const done = () => { signal.removeEventListener('abort', done); resolve(); };
        timer = setTimeout(done, 2000); signal.addEventListener('abort', done, { once: true });
      });
    } finally {
      if (canvas) canvas.width = canvas.height = 0;
      if (url) URL.revokeObjectURL(url);
      file.value = '';
      if (token === generation && !signal.aborted) { stop(); begin(); }
    }
  }
  file.addEventListener('change', nativeReturned);
  file.addEventListener('cancel', () => { if (stage.dataset.phase === 'native') { stop(); begin(); } });
  native.addEventListener('click', openNative); fallback.addEventListener('click', openNative);
  async function sample(token, signal) {
    if (signal.aborted || token !== generation || stage.dataset.phase !== 'aiming' || busyToken === token) return;
    busyToken = token;
    let canvas;
    try {
      if (video.readyState < 2 || !video.videoWidth) return;
      const bounds = video.getBoundingClientRect(); if (!bounds.width || !bounds.height) return;
      checkCapturedView();
      if (pendingQuick || pendingAuto) { feedback(); return; }
      if (automatic()) {
        canvas = frame(video, video.videoWidth, video.videoHeight, 1920);
        stage.dataset.triggerReason = 'processor-idle';
        if (queueAutomatic(token, signal, canvas)) canvas = null; // Queue owns the snapshot.
        return;
      }
      // Preview geometry is useful with Auto off, but never delays an Auto capture.
      canvas = frame(video, video.videoWidth, video.videoHeight, 1280);
      let regions = [];
      try { regions = await detectTitleRegions(canvas, signal); } catch { signal.throwIfAborted(); }
      if (token !== generation || stage.dataset.phase !== 'aiming') return;
      liveGeometry = { regions: regions.map(region => ({ ...region })), sourceWidth: canvas.width, sourceHeight: canvas.height };
      if (performance.now() >= greenUntil) overlay.candidates(regions, canvas.width, canvas.height);
      feedback();
    } catch (error) {
      if (!signal.aborted) onStatus('Keep card names visible, or take a camera photo.');
    } finally {
      if (canvas) canvas.width = canvas.height = 0;
      if (busyToken === token) busyToken = null;
      if (!signal.aborted && token === generation && stage.dataset.phase === 'aiming')
        timer = setTimeout(() => sample(token, signal), 1000);
    }
  }
  async function begin(selectedDevice) {
    if (opening) return;
    if (stream) { if (stage.dataset.phase === 'interrupted') await resumeLive(); return; }
    stop();
    const token = generation;
    opening = true; start.disabled = true; delete stage.dataset.cameraError;
    stage.hidden = false; onEntering(); phase('opening'); pause.setAttribute('aria-label', 'Pause camera'); pause.querySelector('path').setAttribute('d', 'M9 5v14M15 5v14');
    const controller = new AbortController(); run = controller;
    onStatus('Opening camera…');
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('unsupported');
      const camera = await navigator.mediaDevices.getUserMedia({ audio: false,
        video: { ...(selectedDevice ? { deviceId: { exact: selectedDevice } } : { facingMode: { ideal: facing } }),
          width: { ideal: 2560 }, height: { ideal: 1440 } } });
      if (token !== generation || controller.signal.aborted) { camera.getTracks().forEach(track => track.stop()); return; }
      stream = camera; video.srcObject = camera;
      const track = camera.getVideoTracks()[0]; deviceId = track.getSettings().deviceId; facing = track.getSettings().facingMode || facing;
      sensorIssue = typeof ImageCapture !== 'function'
        ? 'This browser session does not expose ImageCapture. Open app.benwiz.com directly in Safari; Native camera still works.'
        : 'This browser exposes ImageCapture but not sensor photo capture.';
      try {
        photoCamera = typeof ImageCapture === 'function' ? new ImageCapture(track) : null;
        if (typeof photoCamera?.takePhoto !== 'function') photoCamera = null;
      } catch (error) { photoCamera = null; sensorIssue = `Sensor camera could not initialize (${error.name}: ${error.message}).`; }
      stage.dataset.sensorSupport = photoCamera ? 'available' : sensorIssue;
      track.addEventListener('ended', () => {
        if (stream === camera) { stop(); onStatus('Camera interrupted. Resume or use a photo.', true); }
      });
      track.addEventListener('mute', () => {
        if (stream !== camera || stage.dataset.phase !== 'aiming') return;
        generation++; clearTimeout(timer); run?.abort(); cancelQuick(); cancelAuto(); run = new AbortController();
        foreground = false; video.pause(); phase('interrupted'); start.disabled = false;
        pause.setAttribute('aria-label', 'Resume camera'); pause.querySelector('path').setAttribute('d', 'M8 5v14l11-7z');
        onStatus('Camera interrupted. Waiting for the device; Resume can retry without reopening the camera.', true);
      });
      track.addEventListener('unmute', () => { if (stream === camera && stage.dataset.phase === 'interrupted') resumeLive(); });
      await video.play(); if (token !== generation) return;
      resetAim(); sample(token, controller.signal);
      const devices = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      if (token !== generation) return;
      flip.hidden = devices.filter(device => device.kind === 'videoinput').length < 2;
    } catch (error) {
      if (token !== generation) return;
      stage.dataset.cameraError = `${error.name}: ${error.message}`;
      stop();
      onStatus(error.name === 'NotAllowedError' ? 'Camera access was denied. Allow camera access in Safari settings, or use a photo.'
        : error.name === 'NotFoundError' ? 'No camera was found. Take a camera photo instead.'
        : 'The camera couldn’t open. Resume or take a camera photo.', true);
    } finally { if (token === generation) opening = false; }
  }
  start.addEventListener('click', () => onStart ? onStart() : begin());
  pause.addEventListener('click', () => {
    if (stream && stage.dataset.phase === 'interrupted') { resumeLive(); return; }
    if (stream || opening) { cancelQuick(); stop(true); onStatus('Camera paused. Resume when ready.'); }
    else if (onStart) onStart(); else begin();
  });
  close.addEventListener('click', () => { cancelQuick(); stop(); onStatus('Camera stopped. Your collection is saved.'); });
  flip.addEventListener('click', async () => {
    const token = generation;
    const devices = await navigator.mediaDevices.enumerateDevices().catch(() => []);
    if (token !== generation) return;
    const cameras = devices.filter(device => device.kind === 'videoinput');
    const index = cameras.findIndex(device => device.deviceId === deviceId); const next = cameras[(index + 1) % cameras.length];
    cancelQuick(); stop(); facing = facing === 'environment' ? 'user' : 'environment'; begin(next?.deviceId);
  });
  function frameCandidates(regions, { id, width, height } = {}) {
    if (!stream || stage.dataset.phase !== 'aiming') return;
    checkCapturedView();
    if (!capturedView?.valid || id !== capturedView.id || !regions.length) return;
    overlay.captured(regions, width, height); stage.dataset.captureOutline = 'titles';
  }
  function frameMatch(match, { id } = {}) {
    if (!stream || stage.dataset.phase !== 'aiming') return;
    checkCapturedView();
    if (!capturedView?.valid || id !== capturedView.id) return;
    greenUntil = performance.now() + 2000;
    overlay.recognized(match);
  }
  async function resumeLive() {
    const token = generation;
    if (!stream) return;
    run ??= new AbortController();
    try {
      await video.play();
      if (token !== generation || run.signal.aborted) return;
      pause.setAttribute('aria-label', 'Pause camera'); pause.querySelector('path').setAttribute('d', 'M9 5v14M15 5v14');
      foreground = false; resetAim(); sample(token, run.signal);
    } catch {
      if (token !== generation) return;
      phase('interrupted'); start.disabled = false;
      onStatus('Camera is waiting for the device. Tap Resume to retry.', true);
    }
  }
  return { stop, updateQuick, frameQueued, frameCompleted, frameCandidates, frameMatch, start: () => begin(), awaitingNative: () => stage.dataset.phase === 'native' };
}
