// Keep the visible message stable; combine bursts waiting behind it.
export function notifications({ show, hide, schedule = setTimeout, unschedule = clearTimeout, now = Date.now }) {
  let active, timer;
  const pending = [], recent = new Map();
  function next() {
    active = pending.shift();
    if (!active) { hide(); return; }
    const message = active.message ?? active.format(active);
    show(message, Boolean(active.error));
    const duration = Math.max(active.error ? 8000 : 5500, Math.min(12000, message.split(/\s+/).length * 350));
    timer = schedule(next, duration);
  }
  return {
    push(item) {
      if (item.cooldown && recent.has(item.key) && now() - recent.get(item.key) < item.cooldown) return;
      if (item.cooldown) recent.set(item.key, now());
      if (item.message && (active?.message === item.message || pending.some(entry => entry.message === item.message))) return;
      const waiting = item.key && pending.find(entry => entry.key === item.key);
      if (waiting && item.merge) Object.assign(waiting, item.merge(waiting, item));
      else {
        // No unbounded history of transient notifications to read later.
        if (pending.length === 3) pending.shift();
        pending.push(item);
      }
      if (!active) next();
    },
    clear() { unschedule(timer); pending.length = 0; active = undefined; hide(); },
  };
}

export function frameNotification({ names, collected, kind, id }) {
  return {
    key: `${kind}-results`, frames: 1, names, collected, kind, id,
    merge: (previous, incoming) => ({ ...previous, frames: previous.frames + incoming.frames,
      names: [...new Set([...previous.names, ...incoming.names])], collected: [...new Set([...previous.collected, ...incoming.collected])] }),
    format(result) {
      const label = result.kind === 'auto' ? 'Auto frame' : result.frames === 1 ? `Quick Frame ${result.id}` : `${result.frames} Quick Frames`;
      if (result.collected.length) return `${label}: Collected ${result.collected.length === 1 ? result.collected[0] : `${result.collected.length} new cards`}.`;
      if (result.names.length) return `${label}: ${result.names.length === 1 ? result.names[0] : `${result.names.length} names`} recognized · already in Cards.`;
      return `${label}: no match. Try closer or less glare.`;
    },
  };
}
