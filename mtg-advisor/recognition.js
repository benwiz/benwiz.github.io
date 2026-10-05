// Recognition and catalog matching stay separate from deck judgment.
export function normalize(value) {
  return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function distance(a, b) {
  let row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 0; i < a.length; i++) {
    const next = [i + 1];
    for (let j = 0; j < b.length; j++) {
      next.push(Math.min(next[j] + 1, row[j + 1] + 1, row[j] + (a[i] !== b[j])));
    }
    row = next;
  }
  return row[b.length];
}

export function makeCatalog(names) {
  const exact = new Map();
  const byLength = new Map();
  for (const name of names) {
    // Either face of a double-faced card resolves to its full database name.
    for (const face of [name, ...name.split(' // ')]) {
      const key = normalize(face);
      exact.set(key, name);
      const bucket = byLength.get(key.length) || [];
      bucket.push([key, name]);
      byLength.set(key.length, bucket);
    }
  }
  return { exact, byLength };
}

export function matchName(text, catalog) {
  // Printed mana symbols often OCR as digits or isolated punctuation at the end.
  const key = normalize(text).replace(/(?:\s+(?:\d+|[a-z]))+$/, '').trim();
  if (key.length < 4 || key.length > 70) return null;
  if (catalog.exact.has(key)) return { name: catalog.exact.get(key), exact: true };
  if (key.length < 8) return null; // Short fuzzy names are too easy to confuse.
  const allowance = Math.min(2, Math.floor(key.length * 0.12));
  let best = allowance + 1;
  let matches = new Set();
  for (let length = key.length - allowance; length <= key.length + allowance; length++) {
    for (const [candidate, name] of catalog.byLength.get(length) || []) {
      const score = distance(key, candidate);
      if (score < best) { best = score; matches = new Set([name]); }
      else if (score === best) matches.add(name);
    }
  }
  return best <= allowance && matches.size === 1 ? { name: [...matches][0], exact: false } : null;
}

export function recognizedNames(blocks, catalog) {
  const found = new Map();
  for (const block of blocks || []) {
    for (const paragraph of block.paragraphs || []) {
      for (const line of paragraph.lines || []) {
        if (line.confidence < 65) continue;
        const match = matchName(line.text.trim(), catalog);
        if (match && !found.has(match.name)) found.set(match.name, { ...match, bbox: line.bbox, text: line.text.trim() });
      }
    }
  }
  return [...found.values()];
}

export function cardRecord(card) {
  return {
    id: card.oracle_id || card.id, name: card.name, quantity: 1,
    manaCost: card.mana_cost || '', manaValue: card.cmc,
    type: card.type_line, colors: card.colors || [], colorIdentity: card.color_identity || [],
    legalities: card.legalities || {}, url: card.scryfall_uri,
    faces: (card.card_faces || [card]).map(face => ({
      name: face.name, text: face.oracle_text || '', type: face.type_line,
      manaCost: face.mana_cost || '', power: face.power, toughness: face.toughness,
      image: face.image_uris?.normal || card.image_uris?.normal || '',
    })),
    // Model-generated annotations can be added without changing scan acceptance.
    advice: null,
  };
}
