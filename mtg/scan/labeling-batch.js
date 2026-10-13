function needsRoles(card, pipeline) {
  const labeling = card.labeling;
  return labeling?.model !== pipeline.labelModel || labeling.status === 'unavailable'
    || !Array.isArray(labeling.answers) || !labeling.answers.length || labeling.answers.some(answer => answer.error);
}

export function pendingRoleCards(cards, pipeline) {
  if (!pipeline?.labelModel) return [];
  const seen = new Set();
  return Array.from(cards).filter(card => {
    if (!card || seen.has(card.id)) return false;
    seen.add(card.id);
    return needsRoles(card, pipeline);
  });
}

// The caller stops capture and releases recognition before entering this batch.
// One label runtime stays warm across the batch; caller's finally owns disposal.
export async function runLabelBatch({ cards, pipeline, signal, labelCard, onProgress = () => {} }) {
  const pending = pendingRoleCards(cards, pipeline);
  let completed = 0;
  const state = () => ({ completed, total: pending.length, remaining: pending.length - completed });
  try {
    signal?.throwIfAborted();
    for (const card of pending) {
      signal?.throwIfAborted(); onProgress({ ...state(), cardId: card.id });
      await labelCard(card, pipeline, signal, { keepWarm: true });
      const finished = !needsRoles(card, pipeline);
      if (finished) completed++; // A saved result survives cancellation immediately after inference.
      signal?.throwIfAborted();
      if (!finished) throw new Error('Card roles could not finish. Completed labels remain saved; retry the remaining cards.');
      onProgress({ ...state(), cardId: card.id });
    }
    return state();
  } catch (error) {
    error.batch = state();
    throw error;
  }
}
