export function savedFramesView({ list, count, read, remove }) {
  let urls = [];
  const node = (tag, text, className) => {
    const item = list.ownerDocument.createElement(tag);
    if (text !== undefined) item.textContent = text;
    if (className) item.className = className;
    return item;
  };
  return {
    render(records, busy = false) {
      urls.forEach(url => URL.revokeObjectURL(url)); urls = [];
      count.textContent = String(records.length); list.replaceChildren();
      if (!records.length) {
        const empty = node('li', undefined, 'frames-empty');
        empty.append(node('h3', 'No frames yet'), node('p', 'Open the camera and capture your cards. No recognition runs while you capture.'));
        list.append(empty); return;
      }
      for (const [index, record] of records.entries()) {
        const item = node('li', undefined, 'saved-frame'); item.dataset.key = record.key;
        const image = node('img'); image.loading = 'lazy'; image.decoding = 'async'; image.src = URL.createObjectURL(record.blob); urls.push(image.src);
        image.alt = `Captured frame ${index + 1}`; image.width = record.width; image.height = record.height;
        const copy = node('div', undefined, 'saved-frame-copy'), done = record.state === 'done';
        copy.append(node('h3', `Frame ${index + 1}`), node('p', `${record.width} × ${record.height} · ${new Date(record.at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`, 'frame-meta'));
        copy.append(node('p', done ? (record.names?.length ? record.names.join(', ') : 'No names found. Try another reader or a closer frame.') : record.state === 'error' ? `Read failed: ${record.message || 'Try again.'}` : 'Saved · ready to read', 'frame-result'));
        const actions = node('div', undefined, 'frame-actions');
        const analyze = node('button', done ? 'Read again' : 'Read frame'); analyze.disabled = busy;
        analyze.setAttribute('aria-label', `${done ? 'Read again' : 'Read'} frame ${index + 1}`); analyze.addEventListener('click', () => read(record.key));
        const discard = node('button', 'Remove'); discard.disabled = busy;
        discard.setAttribute('aria-label', `Remove frame ${index + 1}`); discard.addEventListener('click', () => remove(record.key));
        actions.append(analyze, discard); copy.append(actions); item.append(image, copy); list.append(item);
      }
    },
  };
}
