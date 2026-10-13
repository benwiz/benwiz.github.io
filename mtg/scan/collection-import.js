// Validate the whole export before merging. Imports never replace existing cards
// or execute embedded content; the UI renders saved text with textContent.
export function parseCollectionImport(text) {
  if (text.length > 20 * 1024 * 1024) throw new Error('Collection file is too large (20 MB maximum).');
  const data = JSON.parse(text);
  if (data?.schemaVersion !== 1 || !Array.isArray(data.cards) || data.cards.length > 10000)
    throw new Error('Choose a Magic collection JSON export.');
  const ids = new Set();
  for (const card of data.cards) {
    if (!card || typeof card.id !== 'string' || !card.id || typeof card.name !== 'string' || !card.name
      || typeof card.type !== 'string' || !Array.isArray(card.faces) || !card.faces.length
      || card.faces.some(face => !face || typeof face.name !== 'string' || typeof face.text !== 'string' || typeof face.type !== 'string')
      || !Number.isInteger(card.quantity) || card.quantity < 1 || card.quantity > 999 || ids.has(card.id))
      throw new Error('The export contains invalid or duplicate card records. Nothing was imported.');
    if (card.colorIdentity && (!Array.isArray(card.colorIdentity) || card.colorIdentity.some(color => !['W','U','B','R','G'].includes(color))))
      throw new Error('The export contains invalid card colors. Nothing was imported.');
    for (const analysis of [card.categories, card.labeling]) if (analysis && (!Array.isArray(analysis.tags) || analysis.tags.some(tag => typeof tag !== 'string')))
      throw new Error('The export contains invalid analysis. Nothing was imported.');
    if (card.labeling && (!Array.isArray(card.labeling.answers) || card.labeling.answers.some(answer => !answer || !Array.isArray(answer.tags) || answer.tags.some(tag => typeof tag !== 'string'))))
      throw new Error('The export contains invalid role results. Nothing was imported.');
    if (card.url) { try { const url = new URL(card.url); if (url.protocol !== 'https:' || url.hostname !== 'scryfall.com') card.url = ''; } catch { card.url = ''; } }
    for (const face of card.faces) if (face.image) {
      try { const url = new URL(face.image); if (url.protocol !== 'https:' || !(url.hostname === 'scryfall.io' || url.hostname.endsWith('.scryfall.io')) || url.username || url.password) face.image = ''; }
      catch { face.image = ''; }
    }
    ids.add(card.id);
  }
  return data.cards;
}
export function mergeCollectionImport(cards, imported) {
  let added = 0;
  for (const card of imported) if (!cards.has(card.id)) { cards.set(card.id, card); added++; }
  return { added, skipped: imported.length - added };
}
