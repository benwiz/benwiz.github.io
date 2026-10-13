import { recognizedNames, matchName, normalize } from './recognition.js';
import { titleRegions, cropTitle } from './title-regions.js';

let geometryWorker, geometryId = 0;
const geometryJobs = new Map();
export function disposePerception() {
  geometryWorker?.terminate(); geometryWorker = null;
  for (const { reject, cleanup } of geometryJobs.values()) { cleanup(); reject(new Error('Geometry reader stopped.')); }
  geometryJobs.clear();
}
async function findRegions(pixels, signal) {
  // Geometry is substantially slower than a preview frame on the sample photo.
  // Keep it off the UI thread; retain a fallback where module workers can't load.
  const fallback = () => [...titleRegions(pixels), ...titleRegions(pixels, true)];
  if (typeof Worker === 'undefined') return fallback();
  try {
    if (!geometryWorker) {
      geometryWorker = new Worker(new URL('./title-region-worker.js', import.meta.url), { type: 'module' });
      geometryWorker.onmessage = ({ data }) => {
        const job = geometryJobs.get(data.id); if (!job) return;
        geometryJobs.delete(data.id); job.cleanup();
        if (data.error) job.reject(new Error(data.error)); else job.resolve(data.regions);
      };
      geometryWorker.onerror = () => disposePerception();
    }
    const id = ++geometryId;
    // Keep pixels for the fallback; transfer a copy rather than detaching them.
    const data = pixels.data.slice();
    return await new Promise((resolve, reject) => {
      const aborted = () => { geometryJobs.delete(id); reject(signal.reason); };
      const cleanup = () => signal.removeEventListener('abort', aborted);
      geometryJobs.set(id, { resolve, reject, cleanup });
      signal.addEventListener('abort', aborted, { once: true });
      geometryWorker.postMessage({ id, pixels: { width: pixels.width, height: pixels.height, data } }, [data.buffer]);
    });
  } catch {
    signal.throwIfAborted();
    disposePerception();
    return fallback();
  }
}

function analysisPreview(canvas) {
  if (Math.max(canvas.width, canvas.height) <= 2600) return canvas;
  const preview = document.createElement('canvas');
  const scale = 2600 / Math.max(canvas.width, canvas.height);
  preview.width = Math.round(canvas.width * scale); preview.height = Math.round(canvas.height * scale);
  preview.getContext('2d').drawImage(canvas, 0, 0, preview.width, preview.height);
  return preview;
}

export async function detectTitleRegions(canvas, signal) {
  signal.throwIfAborted();
  const preview = analysisPreview(canvas);
  try {
    const pixels = preview.getContext('2d').getImageData(0, 0, preview.width, preview.height);
    const regions = await findRegions(pixels, signal);
    signal.throwIfAborted();
    if (preview === canvas) return regions;
    const sx = canvas.width / preview.width, sy = canvas.height / preview.height;
    return regions.map(region => ({ ...region, x0: region.x0*sx, x1: region.x1*sx, cx: region.cx*sx, width: region.width*sx,
      y0: region.y0*sy, y1: region.y1*sy, cy: region.cy*sy, height: region.height*sy }));
  } finally { if (preview !== canvas) preview.width = preview.height = 0; }
}

// A source can be an uploaded photo or a captured video frame. The same reader
// attempts whole-image text and title panels; it never judges deck suitability.
export async function perceiveFrame(canvas, { reader, catalog, signal, strictShortNames = false, wholeImage = true, manualRegions, detectedRegions, onTiming = () => {}, onProgress = () => {}, onCandidates = () => {}, onMatch = () => {} }) {
  const started = performance.now(), timing = { geometryMs: 0, wholeImageMs: 0, titleMs: 0, titleCount: 0 };
  const observations = [];
  const accept = async observation => {
    signal.throwIfAborted();
    const duplicate = observations.some(previous => previous.name === observation.name
      && Math.abs(previous.bbox.x0 - observation.bbox.x0) < 24
      && Math.abs(previous.bbox.y0 - observation.bbox.y0) < 24);
    if (duplicate) return;
    observations.push(observation);
    await onMatch(observation);
  };
  signal.throwIfAborted();
  // Every unmarked capture uses fresh geometry from the exact captured pixels,
  // including automatic captures. Live hints supplement rather than replace it.
  const regions = manualRegions ?? await detectTitleRegions(canvas, signal);
  timing.geometryMs = performance.now() - started;
  if (!manualRegions && detectedRegions) for (const hint of detectedRegions) {
    const duplicate = regions.some(region => {
      const overlap = Math.max(0, Math.min(region.x1, hint.x1) - Math.max(region.x0, hint.x0))
        * Math.max(0, Math.min(region.y1, hint.y1) - Math.max(region.y0, hint.y0));
      const smaller = Math.min(region.width * region.height, hint.width * hint.height);
      return smaller > 0 && overlap / smaller > .7;
    });
    if (!duplicate) regions.push(hint);
  }
  onCandidates(regions);
  async function readTitles() {
    signal.throwIfAborted();
    await reader.setParameters({ tessedit_pageseg_mode: '7' });
    for (let i = 0; i < regions.length; i++) {
      signal.throwIfAborted();
      onProgress(i + 1, regions.length);
      const titleStarted = performance.now();
      const crop = cropTitle(canvas, regions[i]);
      let result;
      try { result = await reader.recognize(crop); }
      finally { crop.width = crop.height = 0; }
      timing.titleMs += performance.now() - titleStarted; timing.titleCount++;
      const match = matchName(result.data.text.trim(), catalog);
      if (match && result.data.confidence >= (strictShortNames && normalize(result.data.text).length <= 7 ? 80 : 55)) await accept({
        ...match, bbox: regions[i], method: 'title-strip-text', confidence: result.data.confidence,
      });
    }
  }
  if (!manualRegions && wholeImage) {
    await reader.setParameters({ tessedit_pageseg_mode: '11' });
    const preview = analysisPreview(canvas);
    const wholeStarted = performance.now();
    try {
      const { data } = await reader.recognize(preview, {}, { blocks: true, text: true });
      timing.wholeImageMs = performance.now() - wholeStarted;
      for (const match of recognizedNames(data.blocks, catalog)) {
        if (preview !== canvas) {
          const sx = canvas.width / preview.width, sy = canvas.height / preview.height;
          match.bbox = {x0:match.bbox.x0*sx, x1:match.bbox.x1*sx, y0:match.bbox.y0*sy, y1:match.bbox.y1*sy};
        }
        if (strictShortNames && normalize(match.text).length <= 7 && !regions.some(region => {
          const overlap = Math.max(0, Math.min(region.x1, match.bbox.x1) - Math.max(region.x0, match.bbox.x0))
            * Math.max(0, Math.min(region.y1, match.bbox.y1) - Math.max(region.y0, match.bbox.y0));
          const area = (match.bbox.x1 - match.bbox.x0) * (match.bbox.y1 - match.bbox.y0);
          return area > 0 && overlap > area * .5;
        })) continue;
        await accept({ ...match, method: 'whole-image-text' });
      }
    } finally { if (preview !== canvas) preview.width = preview.height = 0; }
  }
  await readTitles();
  onTiming({ ...timing, totalMs: performance.now() - started });
  return observations;
}
