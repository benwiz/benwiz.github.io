import { contextKey } from './decision.js';

export function reviewState(card, context, pool, reviewModel) {
  if (!card.advice) return 'not-reviewed';
  if (reviewModel !== undefined && card.advice.model !== reviewModel) return 'stale';
  if (card.advice.context !== contextKey(context) || card.advice.pool !== pool || typeof card.advice.include !== 'boolean') return 'stale';
  return card.advice.include ? 'include' : 'exclude';
}

export function matchesCollection(card, filters, context, pool, { tags = card.categories?.tags || [], reviewModel } = {}) {
  const text = `${card.name} ${card.type} ${card.faces.map(face => face.text).join(' ')} ${tags.join(' ')}`.toLowerCase();
  if (filters.query && !text.includes(filters.query.toLowerCase().trim())) return false;
  const colors = card.colorIdentity || [];
  if (filters.colors?.length && !filters.colors.some(color => color === 'C' ? !colors.length : colors.includes(color))) return false;
  if (filters.type && ![card.type, ...card.faces.map(face => face.type)].some(type => (type || '').split('—')[0].split(/\s+/).includes(filters.type))) return false;
  if (filters.mana && (filters.mana === '6+' ? !(card.manaValue >= 6) : card.manaValue !== Number(filters.mana))) return false;
  if (filters.tag && (filters.tag === 'untagged' ? tags.length > 0 : !tags.includes(filters.tag))) return false;
  return !filters.review || reviewState(card, context, pool, reviewModel) === filters.review;
}

export function cardImageURL(card) {
  try {
    const url = new URL(card.faces[0]?.image);
    return url.protocol === 'https:' && (url.hostname === 'scryfall.io' || url.hostname.endsWith('.scryfall.io')) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

export function exportCollection(cards, deck, now = new Date(), { reviewModel } = {}) {
  const pool = JSON.stringify(cards.map(card => [card.id, card.quantity]).sort((a, b) => a[0].localeCompare(b[0])));
  return {
    schemaVersion: 1, exportedAt: now.toISOString(), deck,
    cards: cards.map(card => ({ ...card, reviewStatus: reviewState(card, deck, pool, reviewModel) })),
  };
}
