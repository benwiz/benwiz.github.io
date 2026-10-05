import { analyzeVideo, videoSampleTimes } from './video-analysis.js';

const timestamp = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

export function initVideoUpload({ elements, processCapture, ensureReady = async () => true,
  onOpen = () => {}, onBack = () => {}, onComplete = () => {}, onError = () => {} }) {
  const { input, video, start, stop, back, status, progress, metadata } = elements;
  let url, file, run = null, loading = false, loaded = false, complete = false, generation = 0;
  let state = freshState();
  function freshState() { return { nextIndex: 0, analyzed: 0, skipped: 0, matches: [], fingerprint: null }; }
  function controls() {
    start.disabled = Boolean(run || loading || !loaded || complete);
    start.textContent = state.nextIndex && !complete ? 'Resume analysis' : 'Start analysis';
    stop.disabled = !run;
    input.disabled = Boolean(run);
    video.controls = !run;
    video.setAttribute('aria-busy', String(Boolean(run)));
  }
  function stopped() {
    if (run) {
      run.abort();
      status.textContent = 'Stopping analysis… Found cards are saved.';
    }
    video.pause();
  }
  function release() {
    loaded = false;
    video.removeAttribute('src'); video.load();
    if (url) URL.revokeObjectURL(url);
    url = null;
  }
  function selected() {
    const next = input.files?.[0];
    if (!next) return; // Canceling the picker preserves the current recording.
    stopped(); generation++;
    release(); file = next; complete = false; state = freshState(); loading = true;
    progress.value = 0; progress.max = 1;
    metadata.textContent = file.name;
    status.textContent = 'Opening recording…';
    url = URL.createObjectURL(file); video.src = url; video.load();
    controls(); onOpen();
  }
  function ready() {
    if (!file || !loading) return;
    try {
      const samples = videoSampleTimes(video.duration);
      if (!video.videoWidth || !video.videoHeight) throw new Error('This file has no readable video frames.');
      loading = false; loaded = true;
      metadata.textContent = `${file.name} · ${video.videoWidth} × ${video.videoHeight} · ${timestamp(video.duration)}`;
      progress.max = samples.length;
      status.textContent = `${samples.length} sampled frames. Recognition uses original video pixels. Start when ready.`;
      controls();
    } catch (error) { failed(error); }
  }
  function failed(error) {
    loading = false; loaded = false;
    status.textContent = error?.message || 'This browser cannot open this video. Try an H.264 MP4 recording.';
    controls(); onError(error);
  }
  async function begin() {
    if (run || !loaded || complete) return;
    const controller = new AbortController(), token = generation;
    run = controller; controls(); status.textContent = 'Checking recognition pipeline…';
    try {
      if (!await ensureReady() || controller.signal.aborted || token !== generation) {
        if (!controller.signal.aborted && token === generation) status.textContent = 'Prepare the selected pipeline in Settings, then return here to start.';
        return;
      }
      const result = await analyzeVideo({ video, processCapture, signal: controller.signal, state,
        onProgress(update) {
          if (controller.signal.aborted || token !== generation) return;
          progress.max = update.total; progress.value = update.completed;
          status.textContent = `${update.phase === 'decoding' ? 'Opening' : update.phase === 'reading' ? 'Reading' : 'Sampled'} ${timestamp(update.time)} / ${timestamp(update.duration)} · ${update.completed} of ${update.total} frames · ${update.analyzed} analyzed${update.skipped ? ` · ${update.skipped} unchanged` : ''}${update.message ? ` · ${update.message}` : ''}`;
        },
      });
      if (controller.signal.aborted || token !== generation) return;
      await onComplete(result, { signal: controller.signal, onProgress(message) {
        if (!controller.signal.aborted && token === generation) status.textContent = String(message);
      } });
      if (controller.signal.aborted || token !== generation) return;
      complete = true;
      status.textContent = `Analysis complete. ${result.analyzed} frames analyzed${result.skipped ? `; ${result.skipped} unchanged frames skipped` : ''}. Found cards are saved in Cards.`;
    } catch (error) {
      if (token !== generation) return;
      if (controller.signal.aborted || error.name === 'AbortError') status.textContent = 'Analysis stopped. Found cards are saved. Resume when ready.';
      else { status.textContent = `${error.message} Found cards are saved. You can retry or choose another video.`; onError(error); }
    } finally {
      if (run === controller) {
        run = null;
        if (controller.signal.aborted && token === generation) status.textContent = 'Analysis stopped. Found cards are saved. Resume when ready.';
        controls();
      }
    }
  }
  function leave() { stopped(); onBack(); }
  input.addEventListener('change', selected);
  video.addEventListener('loadeddata', ready);
  const videoError = () => failed(new Error('This browser cannot open this video. Try an H.264 MP4 recording.'));
  video.addEventListener('error', videoError);
  start.addEventListener('click', begin);
  stop.addEventListener('click', stopped);
  back.addEventListener('click', leave);
  controls();
  return {
    open({ choose = true } = {}) { onOpen(); if (choose) { input.value = ''; input.click(); } },
    close: stopped,
    stop: stopped,
    destroy() {
      stopped(); generation++; release();
      input.removeEventListener('change', selected); video.removeEventListener('loadeddata', ready);
      video.removeEventListener('error', videoError); start.removeEventListener('click', begin);
      stop.removeEventListener('click', stopped); back.removeEventListener('click', leave);
    },
    get running() { return Boolean(run); },
  };
}
