import { cardRecord } from './recognition.js';

// One serialized lookup queue across every source. No physical-copy counting.
export function collectionAcceptor({ cards, lookup, onAdded, spacing = 150 }) {
  const identities = new Map();
  const excluded = new Set();
  let queue = Promise.resolve();
  const remember = card => {
    for (const name of [card.name, ...card.faces.map(face => face.name)]) identities.set(name, card.id);
  };
  for (const card of cards.values()) remember(card);
  return {
    rememberAll() { for (const card of cards.values()) remember(card); },
    remove(card) {
      cards.delete(card.id);
      excluded.add(card.id);
      for (const name of [card.name, ...card.faces.map(face => face.name)]) excluded.add(name);
    },
    accept(match, { signal, source }) {
      const work = queue.then(async () => {
        signal.throwIfAborted();
        if (excluded.has(match.name)) return null;
        const known = identities.get(match.name);
        if (known) return excluded.has(known) ? null : cards.get(known) || null;
        let card;
        try {
          card = cardRecord(await lookup(match.name, signal));
        } finally {
          // Include failed requests in rate limiting; cancellation can't bypass spacing.
          await new Promise(resolve => setTimeout(resolve, spacing));
        }
        signal.throwIfAborted();
        remember(card);
        if (excluded.has(card.id) || excluded.has(card.name) || excluded.has(match.name)) return null;
        if (cards.has(card.id)) return cards.get(card.id);
        card.observation = { source, method: match.method, exactNameMatch: match.exact,
          bbox: match.bbox, ocrConfidence: match.confidence ?? null };
        cards.set(card.id, card);
        onAdded(card);
        return card;
      });
      queue = work.catch(() => {});
      return work;
    },
  };
}
