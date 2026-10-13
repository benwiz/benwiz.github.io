const storageKey = 'mtg-runtime-diagnostics:v1';
const sessionKey = 'mtg-runtime-session:v1';
const allowedFields = new Set(['model', 'stage', 'backend', 'width', 'height', 'inputTokens', 'elapsedMs', 'releaseFailed']);
const pageId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
let sessionId = pageId;
try { sessionId = sessionStorage.getItem(sessionKey) || pageId; sessionStorage.setItem(sessionKey, sessionId); } catch { /* Diagnostics work without session storage. */ }

export function getRuntimeDiagnostics() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved.slice(-100) : [];
  } catch { return []; }
}

// Deliberately excludes camera contents, card names/rules and collection data.
export function recordRuntimeEvent(event, fields = {}) {
  const details = {};
  for (const [key, value] of Object.entries(fields)) {
    if (!allowedFields.has(key)) continue;
    if (typeof value === 'string') details[key] = value.slice(0, 120);
    else if (typeof value === 'number' && Number.isFinite(value) || typeof value === 'boolean') details[key] = value;
  }
  const entry = { at: new Date().toISOString(), pageId, sessionId, event: String(event).slice(0, 80), ...details };
  const events = getRuntimeDiagnostics(); events.push(entry);
  try { localStorage.setItem(storageKey, JSON.stringify(events.slice(-100))); } catch { /* Failure to save telemetry never blocks processing. */ }
  return entry;
}

export function exportRuntimeDiagnostics() {
  return JSON.stringify({ userAgent: globalThis.navigator?.userAgent || '', events: getRuntimeDiagnostics() }, null, 2);
}
export function clearRuntimeDiagnostics() { try { localStorage.removeItem(storageKey); } catch { /* Optional diagnostic storage. */ } }
