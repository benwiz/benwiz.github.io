import { semIfModel } from './sem-if-config.js';

export const modelDescriptors = Object.freeze({
  florence: Object.freeze({ id: 'florence', name: 'Florence-2', modelId: 'Florence-2', bytes: 360_000_000 }),
  qwen25: Object.freeze({ id: 'qwen25', name: 'Qwen 2.5', modelId: 'Qwen2.5-1.5B-Instruct', bytes: 1_000_000_000 }),
  semif: Object.freeze({ id: 'semif', name: 'OpenJev / SemIf', modelId: semIfModel.id, bytes: semIfModel.downloadBytes }),
  qwen35: Object.freeze({ id: 'qwen35', name: 'Qwen 3.5', modelId: 'Qwen3.5-0.8B', bytes: null }),
});

// Preparation is sequential. Vision goes last so Settings can leave it ready
// for capture without retaining any text model in memory.
export function requiredModels(preset, { includeReview = false } = {}) {
  const ids = new Set();
  if (['qwen25-only', 'reconciled-qwen25-semif'].includes(preset.labelModel)) ids.add('qwen25');
  if (includeReview && preset.reviewModel) ids.add(preset.reviewModel === 'Qwen3.5-0.8B' ? 'qwen35' : 'qwen25');
  if (['semif-qwen3-0.6b', 'reconciled-qwen25-semif'].includes(preset.labelModel)) ids.add('semif');
  if (preset.recognition !== 'tesseract') ids.add('florence');
  return ['qwen25', 'qwen35', 'semif', 'florence'].filter(id => ids.has(id)).map(id => modelDescriptors[id]);
}
