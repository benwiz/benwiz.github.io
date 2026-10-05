function indexedStorage() {
  let database;
  const open = () => database ||= new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) { reject(new Error('Browser storage is unavailable.')); return; }
    const request = indexedDB.open('mtg-pending-captures:v1', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('captures', { keyPath: 'key' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('Close other scanner tabs to update capture storage.'));
  });
  const transaction = async (mode, work) => {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('captures', mode), store = tx.objectStore('captures');
      let value;
      tx.oncomplete = () => resolve(value);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error('Capture storage failed.'));
      work(store, result => { value = result; });
    });
  };
  return {
    list: () => transaction('readonly', (store, done) => { store.getAll().onsuccess = event => done(event.target.result); }),
    put: record => transaction('readwrite', store => store.put(record)),
    remove: key => transaction('readwrite', store => store.delete(key)),
  };
}

// Capture writes never invoke inference. Sources survive reads and reloads;
// only explicit removal deletes them. Keep the legacy store for saved captures.
export function createCaptureJournal({ storage = indexedStorage(), capacity = 60 } = {}) {
  let writes = Promise.resolve();
  return {
    list: async () => { await writes; return (await storage.list()).sort((a, b) => a.at - b.at); },
    save(canvas, metadata = {}) {
      const key = crypto.randomUUID(), width = canvas.width, height = canvas.height;
      const encoded = new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Capture could not be saved.')), 'image/jpeg', .9));
      const ready = writes.then(async () => {
        const blob = await encoded;
        if ((await storage.list()).length >= capacity) throw new Error('Saved capture limit reached. Read or remove saved frames in Frames.');
        await storage.put({ ...metadata, key, at: Date.now(), width, height, blob });
        return key;
      });
      // Observe encoding even if an earlier write fails, avoiding unhandled rejections.
      encoded.catch(() => {}); writes = ready.catch(() => {});
      return { key, ready };
    },
    async update(key, changes) {
      const ready = writes.then(async () => {
        const record = (await storage.list()).find(item => item.key === key);
        if (record) await storage.put({ ...record, ...changes, key });
      });
      writes = ready.catch(() => {});
      return ready;
    },
    remove(key) {
      const ready = writes.then(() => storage.remove(key));
      writes = ready.catch(() => {});
      return ready;
    },
  };
}
