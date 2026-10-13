export const captureAlgorithms = Object.freeze([
  { id: 'ocr', name: 'OCR', recognition: 'tesseract', note: 'Reads printed card names. No AI labeling model needed.' },
  { id: 'vision', name: 'Vision', recognition: 'florence', note: 'Downloads 275–357 MB for image recognition on this device. OCR is the lighter option.' },
]);
export const processingModels = Object.freeze([
  { id: 'qwen25', name: 'Qwen 2.5', labelModel: 'qwen25-only', reviewModel: 'Qwen2.5-1.5B-Instruct', reviewName: 'Qwen 2.5', note: 'About 1 GB. Requires WebGPU and sufficient device memory. Labels roles and reviews decks.' },
  { id: 'semif', name: 'OpenJev', labelModel: 'semif-qwen3-0.6b', reviewModel: null, note: 'About 639 MB. Labels card roles; CPU processing can be slow.' },
]);
export function migrateChoices(savedCapture, savedProcessing, legacyPipeline) {
  const legacyVision = ['qwen25-labels', 'openjev-labels'].includes(legacyPipeline);
  const legacyOpenJev = ['current-openjev', 'openjev-labels'].includes(legacyPipeline);
  return {
    capture: captureAlgorithms.some(item => item.id === savedCapture) ? savedCapture : legacyVision ? 'vision' : 'ocr',
    processing: processingModels.some(item => item.id === savedProcessing) ? savedProcessing : legacyOpenJev ? 'semif' : 'qwen25',
  };
}
