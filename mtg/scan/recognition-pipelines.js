import { perceiveFrame, detectTitleRegions } from './perception.js';
import { cropTitle } from './title-regions.js';
import { matchName, normalize } from './recognition.js';

const semIfDownload = 'OpenJev prepares about 639 MB plus its local runtime in Settings. It labels validated card rules. Requires browser workers, WebAssembly and enough device memory; uses WebGPU when available, otherwise CPU. CPU labeling can be slow.';
const visualDownload = 'Florence prepares about 275–357 MB of model files in Settings. Supported WebGPU devices use GPU acceleration; other browsers use CPU. Recognition can be slow on phones.';
const qwenDownload = 'Qwen 2.5 prepares about 1 GB in Settings and requires WebGPU. It labels validated card rules, not camera images.';
export const defaultRecognitionPipeline = 'ocr';
export const recognitionPipelines = [
  { id: 'ocr', name: 'OCR', available: true, recognition: 'tesseract', labelModel: null, reviewModel: null },
  { id: 'vision', name: 'Vision', available: true, recognition: 'florence', labelModel: null, reviewModel: null },
  { id: 'standard', name: 'Tesseract + Qwen 2.5', available: true, recognition: 'tesseract', reviewModel: 'Qwen2.5-1.5B-Instruct', reviewName: 'Qwen 2.5', labelModel: 'qwen25-only', visionDownload: false,
    description: 'Tesseract reads names from the full scene and title strips. Qwen 2.5 labels the validated card rules and can review a deck.', downloadNote: qwenDownload },
  { id: 'current-openjev', name: 'Tesseract + OpenJev', available: true, recognition: 'tesseract', reviewModel: null, labelModel: 'semif-qwen3-0.6b', visionDownload: false,
    description: 'Tesseract reads card names. OpenJev chooses a primary role from the validated card rules, with an unknown option.', downloadNote: semIfDownload },
  { id: 'qwen25-labels', name: 'Florence + Qwen 2.5', available: true, recognition: 'florence', reviewModel: 'Qwen2.5-1.5B-Instruct', reviewName: 'Qwen 2.5', labelModel: 'qwen25-only', visionDownload: true,
    description: 'Florence reads images. Qwen 2.5 labels the validated card rules and can review a deck.', downloadNote: `${visualDownload} ${qwenDownload}` },
  { id: 'openjev-labels', name: 'Florence + OpenJev', available: true, recognition: 'florence', reviewModel: null, labelModel: 'semif-qwen3-0.6b', visionDownload: true,
    description: 'Florence reads images. OpenJev chooses a primary role from the validated card rules, with an unknown option.', downloadNote: `${visualDownload} ${semIfDownload}` },
];
export function recognitionPipeline(id) {
  const preset = recognitionPipelines.find(pipeline => pipeline.id === id);
  if (!preset?.available) throw new Error('This recognition pipeline is unavailable. Choose an available pipeline in Settings.');
  return preset;
}

// Every preset receives the same original capture. Resizing belongs only to an
// individual model's processor; no preset substitutes a different capture source.
export async function recognizeWithPipeline(canvas, { pipelineId = defaultRecognitionPipeline, ...options }) {
  const preset = recognitionPipeline(pipelineId);
  options.signal.throwIfAborted();
  if (preset.recognition === 'tesseract') return perceiveFrame(canvas, options);
  if (preset.labelModel) {
    // A prior card can leave the text-label model warm. Release it before
    // loading vision again rather than stacking both weight sets on a phone.
    const { releaseSemIf } = await import('./sem-if-reader.js');
    options.signal.throwIfAborted(); await releaseSemIf();
  }
  const { florenceRead } = await import('./florence-reader.js');
  options.signal.throwIfAborted();
  const started = performance.now(), observations = [], names = new Set();
  let visionMs = 0;
  const safetyRegions = options.strictShortNames && !options.manualRegions ? await detectTitleRegions(canvas, options.signal) : [];
  const geometryMs = performance.now() - started;
  const accept = async (text, bbox, method, titleEvidence = false) => {
    options.signal.throwIfAborted();
    // Florence emits text, not calibrated recognition probabilities. Keep exact
    // catalog identities only instead of inventing a confidence score.
    const match = matchName(text, options.catalog);
    if (!match?.exact || names.has(match.name)) return;
    if (options.strictShortNames && !titleEvidence && normalize(text).length <= 7 && !safetyRegions.some(region => {
      const overlap = Math.max(0, Math.min(region.x1, bbox.x1) - Math.max(region.x0, bbox.x0))
        * Math.max(0, Math.min(region.y1, bbox.y1) - Math.max(region.y0, bbox.y0));
      const area = (bbox.x1-bbox.x0) * (bbox.y1-bbox.y0);
      return area > 0 && overlap > area * .5;
    })) return;
    const observation = { ...match, text, bbox, method, confidence: null, pipeline: preset.id };
    names.add(match.name); observations.push(observation);
    await options.onMatch?.(observation);
  };
  const readVisual = async image => {
    const began = performance.now();
    const result = await florenceRead(image, { signal: options.signal, onLoading: options.onLoading, onProgress: message => options.onProgress?.(message, null) });
    visionMs += performance.now() - began; return result;
  };
  let tessTiming = {};
  const addTesseractTitles = async () => {
    const matches = await perceiveFrame(canvas, { ...options, wholeImage: false, onTiming: timing => { tessTiming = timing; } });
    for (const match of matches) if (!names.has(match.name)) { names.add(match.name); observations.push({ ...match, pipeline: preset.id }); }
  };
  const finish = () => {
    options.onTiming?.({ pipeline: preset.id, geometryMs: geometryMs + (tessTiming.geometryMs || 0), visionMs, titleMs: tessTiming.titleMs || 0, totalMs: performance.now() - started });
    return observations;
  };
  const readTitlesOnly = preset.recognition === 'florence-titles' || Boolean(options.manualRegions);
  if (readTitlesOnly) {
    const regions = options.manualRegions ?? await detectTitleRegions(canvas, options.signal);
    options.onCandidates?.(regions);
    for (let i = 0; i < regions.length; i++) {
      options.signal.throwIfAborted(); options.onProgress?.(i + 1, regions.length);
      const crop = cropTitle(canvas, regions[i]);
      let lines;
      try { lines = await readVisual(crop); }
      finally { crop.width = crop.height = 0; }
      for (const line of lines) await accept(line.text, regions[i], 'florence-title-text', true);
    }
    if (preset.recognition === 'florence-tesseract') await addTesseractTitles();
    return finish();
  }
  const lines = await readVisual(canvas);
  options.signal.throwIfAborted();
  options.onCandidates?.(lines.map(line => line.bbox));
  for (const line of lines) await accept(line.text, line.bbox, 'florence-whole-image-text');
  if (preset.recognition === 'florence-tesseract') await addTesseractTitles();
  return finish();
}
export async function disposeRecognitionPipelines() {
  // Importing this local module does not download a runtime or model.
  const { releaseFlorence } = await import('./florence-reader.js');
  await releaseFlorence();
  const { releaseSemIf } = await import('./sem-if-reader.js');
  await releaseSemIf();
}
