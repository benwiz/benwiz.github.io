const labels = { queued: 'Queued', reading: 'Reading', labeling: 'Labeling cards', done: 'Complete', error: 'Could not read', canceled: 'Canceled' };
const terminal = new Set(['done', 'error', 'canceled']);
const rank = { queued: 0, reading: 1, labeling: 2, done: 3, error: 3, canceled: 3 };

export function createFrameHistory({ list, toggle, popover, count, capacity = 12,
  document: owner = list.ownerDocument, createURL = blob => URL.createObjectURL(blob), revokeURL = url => URL.revokeObjectURL(url) }) {
  const history = [];
  let disposed = false;
  const node = (tag, text, className) => {
    const element = owner.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  function release(record) { if (record.url) revokeURL(record.url); record.url = null; }
  function render() {
    if (disposed) return;
    list.replaceChildren();
    count.textContent = String(history.length);
    toggle.setAttribute('aria-label', `Captured frames, ${history.length} recent ${history.length === 1 ? 'frame' : 'frames'}`);
    if (!history.length) { list.append(node('p', 'Captured frames will appear here.', 'frame-history-empty')); return; }
    for (const record of [...history].reverse()) {
      const item = node('li', undefined, 'frame-history-item');
      item.dataset.id = String(record.id); item.dataset.state = record.state;
      if (record.url) {
        const image = node('img', undefined, 'frame-history-image');
        image.src = record.url; image.alt = `${record.kind === 'auto' ? 'Auto' : 'Quick'} frame ${record.id}`;
        image.width = record.width; image.height = record.height;
        item.append(image);
      } else item.append(node('span', 'Preview pending', 'frame-history-image frame-history-placeholder'));
      const copy = node('div', undefined, 'frame-history-copy');
      const heading = node('div', undefined, 'frame-history-heading');
      heading.append(node('span', `${record.kind === 'auto' ? 'Auto' : 'Quick'} frame ${record.id}`),
        node('span', labels[record.state], 'frame-history-state'));
      copy.append(heading, node('p', record.pipeline, 'frame-history-pipeline'));
      if (record.message) copy.append(node('p', record.message, 'frame-history-message'));
      if (record.names.length) copy.append(node('p', `Recognized: ${record.names.join(', ')}`, 'frame-history-names'));
      if (record.collected.length) copy.append(node('p', `Added to Cards: ${record.collected.join(', ')}`, 'frame-history-collected'));
      else if (record.state === 'done') copy.append(node('p', record.names.length ? 'Already in Cards.' : 'No card names recognized.', 'frame-history-collected'));
      item.append(copy); list.append(item);
    }
  }
  function thumbnail(source, record) {
    const canvas = owner.createElement('canvas');
    const scale = Math.min(1, 240 / source.width, 320 / source.height);
    canvas.width = Math.max(1, Math.round(source.width * scale));
    canvas.height = Math.max(1, Math.round(source.height * scale));
    record.width = canvas.width; record.height = canvas.height;
    try {
      canvas.getContext('2d').drawImage(source, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(blob => {
        canvas.width = canvas.height = 0;
        // Encoding may finish after the frame has aged out or the view closed.
        if (!blob || disposed || !history.includes(record)) return;
        record.url = createURL(blob); render();
      }, 'image/jpeg', 0.72);
    } catch {
      canvas.width = canvas.height = 0;
      record.message = record.message || 'Frame preview unavailable.';
    }
  }
  const nativePopover = typeof popover.showPopover === 'function';
  const expanded = () => toggle.setAttribute('aria-expanded', String(nativePopover ? popover.matches(':popover-open') : !popover.hidden));
  function openClose() {
    if (nativePopover) {
      if (popover.matches(':popover-open')) popover.hidePopover(); else popover.showPopover();
    } else popover.hidden = !popover.hidden;
    expanded();
  }
  toggle.setAttribute('aria-controls', popover.id);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', openClose);
  popover.addEventListener('toggle', expanded);
  if (!nativePopover) popover.hidden = true;
  render();
  return {
    queue({ id, kind = 'manual', canvas, pipeline = '' }) {
      if (disposed || history.some(record => record.id === id)) return;
      const record = { id, kind, pipeline, state: 'queued', message: '', names: [], collected: [], url: null };
      history.push(record);
      while (history.length > capacity) release(history.shift());
      thumbnail(canvas, record); render();
    },
    update(id, { state, message, names, collected } = {}) {
      const record = history.find(frame => frame.id === id);
      if (!record || disposed || terminal.has(record.state)) return;
      if (state && (!(state in labels) || rank[state] < rank[record.state])) return;
      if (state) record.state = state;
      if (message !== undefined) record.message = String(message);
      if (names) record.names = [...new Set(names)];
      if (collected) record.collected = [...new Set(collected)];
      render();
    },
    records() { return history.map(record => ({ ...record, names: [...record.names], collected: [...record.collected] })); },
    clear() { for (const record of history) release(record); history.length = 0; render(); },
    destroy() {
      disposed = true;
      for (const record of history) release(record);
      history.length = 0; list.replaceChildren();
      toggle.removeEventListener('click', openClose); popover.removeEventListener('toggle', expanded);
      if (nativePopover && popover.matches(':popover-open')) popover.hidePopover();
      else if (!nativePopover) popover.hidden = true;
    },
  };
}
