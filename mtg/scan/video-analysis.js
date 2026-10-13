// Keep one decoded frame in memory, and await recognition before seeking again.
export function videoSampleTimes(duration, { interval = 1, maxFrames = 240 } = {}) {
  if (!Number.isFinite(duration) || duration <= 0) throw new Error('This video has no readable duration.');
  const count = Math.min(maxFrames, Math.max(1, Math.ceil(duration / interval)));
  const step = Math.max(interval, duration / count);
  return Array.from({ length: count }, (_, index) => Math.min(index * step, Math.max(0, duration - 0.05)));
}

function checkAbort(signal) {
  if (signal?.aborted) throw new DOMException('Video analysis stopped.', 'AbortError');
}

export function seekVideo(video, time, signal, timeout = 15000) {
  checkAbort(signal);
  if (Math.abs(video.currentTime - time) < 0.001 && video.readyState >= 2 && !video.seeking) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timer);
      video.removeEventListener('seeked', ready);
      video.removeEventListener('error', failed);
      signal?.removeEventListener('abort', aborted);
    };
    const done = error => { cleanup(); error ? reject(error) : resolve(); };
    const ready = () => {
      if (video.readyState >= 2) done();
      else done(new Error('The browser could not decode this video frame. Try an H.264 MP4 recording.'));
    };
    const failed = () => done(new Error('Safari could not decode this recording. Try an H.264 MP4 recording.'));
    const aborted = () => done(new DOMException('Video analysis stopped.', 'AbortError'));
    const timer = setTimeout(() => done(new Error('This video frame took too long to decode. Try an H.264 MP4 recording.')), timeout);
    video.addEventListener('seeked', ready);
    video.addEventListener('error', failed);
    signal?.addEventListener('abort', aborted, { once: true });
    try { video.currentTime = time; } catch (error) { done(error); }
  });
}

// Compare small tiles as well as the full scene: a replaced card must not hide
// in the average of an otherwise unchanged table. Full frames stay unscaled.
export function videoFrameChanged(previous, current, threshold = 4) {
  if (!previous || previous.length !== current.length) return true;
  for (let tile = 0; tile < current.length; tile += 8 * 4) {
    let difference = 0;
    const end = Math.min(current.length, tile + 8 * 4);
    for (let index = tile; index < end; index += 4) {
      for (let channel = 0; channel < 3; channel++) difference += Math.abs(previous[index + channel] - current[index + channel]);
    }
    if (difference / ((end - tile) / 4 * 3) > threshold) return true;
  }
  return false;
}

export async function analyzeVideo({ video, processCapture, signal, onProgress = () => {},
  state = { nextIndex: 0, analyzed: 0, skipped: 0, matches: [], fingerprint: null },
  createCanvas = () => document.createElement('canvas'), sampling }) {
  const times = videoSampleTimes(video.duration, sampling);
  if (!video.videoWidth || !video.videoHeight) throw new Error('The recording has no readable video frames.');
  const canvas = createCanvas(), thumbnail = createCanvas();
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  thumbnail.width = 64; thumbnail.height = 48;
  const context = canvas.getContext('2d'), sampleContext = thumbnail.getContext('2d', { willReadFrequently: true });
  if (!context || !sampleContext) throw new Error('The browser could not allocate a canvas for this recording.');
  video.pause();
  const report = extra => onProgress({ total: times.length, completed: state.nextIndex, analyzed: state.analyzed,
    skipped: state.skipped, duration: video.duration, ...extra });
  try {
    for (let index = state.nextIndex; index < times.length; index++) {
      checkAbort(signal);
      const time = times[index];
      report({ time, phase: 'decoding' });
      await seekVideo(video, time, signal);
      checkAbort(signal);
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      sampleContext.drawImage(canvas, 0, 0, 64, 48);
      const pixels = sampleContext.getImageData(0, 0, 64, 48).data;
      if (videoFrameChanged(state.fingerprint, pixels)) {
        report({ time, phase: 'reading' });
        const matches = await processCapture(canvas, signal, {
          source: 'uploaded-video', deferLabels: true, background: true,
          onCandidates() {}, onMatch() {},
          onProgress(message) { report({ time, phase: 'reading', message }); },
          onStatus(message) { report({ time, phase: 'reading', message }); },
        });
        checkAbort(signal);
        state.analyzed++;
        state.matches.push(...(matches || []));
        state.fingerprint = pixels;
      } else state.skipped++;
      state.nextIndex = index + 1;
      report({ time, phase: 'sampled' });
    }
    return { ...state, total: times.length };
  } finally {
    canvas.width = canvas.height = thumbnail.width = thumbnail.height = 0;
  }
}
