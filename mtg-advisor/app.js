import { cancellableOCR } from './cancellable-ocr.js';
import { matchesCollection, cardImageURL, exportCollection, reviewState } from './collection-view.js';
import { strategies, contextKey, summarizePool } from './decision.js';
import { makeCatalog } from './recognition.js';
import { disposePerception } from './perception.js';
import { recognitionPipelines, recognizeWithPipeline, disposeRecognitionPipelines } from './recognition-pipelines.js';
import { collectionAcceptor } from './collection.js';
import { walkthrough } from './walkthrough.js';
import { quickFrameQueue } from './quick-frames.js';
import { prepareFlorence, isFlorenceReady, releaseFlorence, waitForFlorenceRelease } from './florence-reader.js';
import { notifications, frameNotification } from './notifications.js';
import { modelDescriptors } from './pipeline-models.js';
import { captureAlgorithms, processingModels, migrateChoices } from './capture-config.js';
import { parseCollectionImport, mergeCollectionImport } from './collection-import.js';
import { createCaptureJournal } from './capture-journal.js';
import { prepareReviewModel } from './model-preparation.js';
import { prepareSemIf, disposeSemIf, releaseSemIf } from './sem-if-reader.js';
import { releaseModelWorker } from './model-lifecycle.js';
import { recordRuntimeEvent, exportRuntimeDiagnostics } from './runtime-diagnostics.js';
import { savedFramesView } from './saved-frames.js';
import { initVideoUpload } from './video-upload.js';
import { pendingRoleCards, runLabelBatch } from './labeling-batch.js';

const $ = id => document.getElementById(id);
recordRuntimeEvent('page-start');
window.addEventListener('error', () => recordRuntimeEvent('page-error'));
window.addEventListener('unhandledrejection', () => recordRuntimeEvent('unhandled-rejection'));
const storageKey = 'mtg-collection:v1';
const cards = new Map();
const preparedModels = new Set();
const modelActivityKey = 'mtg-model-inference:v1';
let previousModelInterruption, activeModelJobs = 0;
try { previousModelInterruption = JSON.parse(localStorage.getItem(modelActivityKey) || 'null'); } catch { /* Recovery remains optional. */ }
function trackLocalModel(label) {
  activeModelJobs++;
  recordRuntimeEvent('processing-start', { model: label });
  try { localStorage.setItem(modelActivityKey, JSON.stringify({ label, at: Date.now() })); } catch { /* Processing works without storage. */ }
  let finished = false;
  return () => {
    if (finished) return; finished = true;
    recordRuntimeEvent('processing-end', { model: label });
    if (--activeModelJobs === 0 && !releaseBlocked) try { localStorage.removeItem(modelActivityKey); } catch { /* Optional recovery marker. */ }
  };
}
const pipelineStorageKey = 'mtg-capture-algorithm:v2';
const processingStorageKey = 'mtg-processing-model:v1';
let choices = migrateChoices();
try { choices = migrateChoices(localStorage.getItem(pipelineStorageKey), localStorage.getItem(processingStorageKey), localStorage.getItem('mtg-recognition-pipeline:v1')); } catch { /* Optional preferences. */ }
let selectedRecognitionPipeline = choices.capture, selectedProcessingModel = choices.processing;
function capturePipeline() { return recognitionPipelines.find(item => item.id === selectedRecognitionPipeline); }
function activePipeline() { return { ...capturePipeline(), ...processingModels.find(item => item.id === selectedProcessingModel) }; }
let roleRun, reviewRun, modelWorker, detailCardId, editingList = false, modelRelease = Promise.resolve(), releaseBlocked = false;
let catalogPromise, workerPromise, showingList = false;
let roleJob = Promise.resolve(), cameraStartSequence = 0;
let readingQueue = Promise.resolve(), showingUploadedVideo = false, backgroundReadStatus;
let collectionScroll = 0, photoScroll = 0, detailScroll = 0;
const element = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};

function status(message, error = false) {
  if (!error && Number($('video-stage').dataset.captureAckUntil) > performance.now()) message = $('video-stage').dataset.captureAcknowledgment;
  else if (!error && backgroundReadStatus) message = backgroundReadStatus;
  $('scan-status').textContent = message;
  $('scan-status').classList.toggle('error', error);
  if (error) queueMicrotask(() => toast(message, true));
}

function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify([...cards.values()])); }
  catch { status('Cards are available for this visit. This browser couldn’t save them; export names to keep a copy.', true); }
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(saved)) for (const card of saved) {
    if (typeof card.id === 'string' && typeof card.name === 'string' && Array.isArray(card.faces)) {
      card.quantity = Number.isInteger(card.quantity) ? Math.max(1, Math.min(999, card.quantity)) : 1;
      cards.set(card.id, card);
    }
  }
} catch { status('Your saved collection couldn’t be read. You can start a new one.', true); }

async function getJSON(url, signal) {
  const response = await fetch(url, { headers: { Accept: 'application/json' }, signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(15000)]) : AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Card lookup returned ${response.status}.`);
  return response.json();
}

function catalog() {
  if (!catalogPromise) {
    catalogPromise = getJSON('https://api.scryfall.com/catalog/card-names')
      .then(data => {
        if (!Array.isArray(data.data)) throw new Error('Card names unavailable.');
        return makeCatalog(data.data);
      }).catch(error => { catalogPromise = null; throw error; });
  }
  return catalogPromise;
}

function loadOCR() {
  if (globalThis.Tesseract) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = element('script');
    script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@6.0.1/dist/tesseract.min.js';
    script.onload = resolve;
    script.onerror = () => { script.remove(); reject(new Error('The text reader couldn’t download.')); };
    document.head.append(script);
  });
}

function worker() {
  if (!workerPromise) {
    workerPromise = loadOCR().then(() => globalThis.Tesseract.createWorker('eng', 1, {
      workerPath: 'https://cdn.jsdelivr.net/npm/tesseract.js@6.0.1/dist/worker.min.js',
      corePath: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@6.0.0',
      langPath: 'https://tessdata.projectnaptha.com/4.0.0_best',
    })).then(async instance => {
      // Sparse text preserves separate title lines across cards laid on a table.
      await instance.setParameters({ tessedit_pageseg_mode: '11' });
      return instance;
    }).catch(error => { workerPromise = null; throw error; });
  }
  return workerPromise;
}
async function releaseOCR() {
  const pending = workerPromise; workerPromise = null;
  if (pending) await pending.then(instance => instance.terminate()).catch(() => {});
  disposePerception();
}

const notices = notifications({
  show(message, error) {
    const node = $('acknowledgment');
    node.textContent = message; node.classList.toggle('error', error);
    document.body.classList.add('has-toast');
    node.classList.remove('received'); void node.offsetWidth; node.classList.add('received');
  },
  hide() { $('acknowledgment').textContent = ''; document.body.classList.remove('has-toast'); },
});
function toast(message, error = false, options = {}) { notices.push({ message, error, ...options }); }

const acceptance = collectionAcceptor({ cards,
  lookup: (name, signal) => getJSON(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`, signal),
  onAdded: () => { persist(); renderList(); },
});

// Tesseract parameters and jobs belong to one frame, even across source switches.
function readFrame(canvas, { afterRead, ...options }) {
  const pipelineId = selectedRecognitionPipeline;
  const job = readingQueue.then(async () => {
    options.onProgress?.('Finishing previous processing…');
    await modelRelease;
    await releaseRuntime(waitForFlorenceRelease);
    await releaseRuntime(() => releaseSemIf());
    options.signal.throwIfAborted();
    options.onProgress?.('Reading captured frame…');
    const names = await catalog();
    const preset = recognitionPipelines.find(pipeline => pipeline.id === pipelineId);
    if (preset.recognition === 'florence') {
      await releaseRuntime(() => releaseModelWorker(modelWorker)); modelWorker = null; await releaseRuntime(() => releaseSemIf());
    }
    const reader = ['tesseract', 'florence-tesseract'].includes(preset.recognition) ? cancellableOCR(await worker(), options.signal, releaseOCR) : undefined;
    options.signal.throwIfAborted();
    const finishModel = trackLocalModel(preset.name);
    recordRuntimeEvent('frame-read', { model: preset.recognition, width: canvas.width, height: canvas.height });
    try {
      const matches = await recognizeWithPipeline(canvas, { ...options, pipelineId, reader, catalog: names });
      options.signal.throwIfAborted();
      await afterRead?.(matches);
      options.signal.throwIfAborted();
      return matches;
    } catch (error) {
      if (error.releaseFailed) blockModelRelease(error);
      recordRuntimeEvent('frame-error', { model: preset.recognition, releaseFailed: Boolean(error.releaseFailed) });
      throw error;
    } finally { finishModel(); }
  });
  readingQueue = job.catch(() => {});
  return job;
}

function cancelAcquisition() {
  cameraStartSequence++;
  backgroundReadStatus = null;
  quickFrames.cancel(); videoCapture.stop();
}

async function safeStartCamera() {
  const sequence = ++cameraStartSequence;
  $('start-video').disabled = true;
  try {
    // A role batch has its own cleanup even after the visible request is aborted.
    // Release the previous reader before restoring a capture-only preview.
    await quickFrames.idle(); await readingQueue; await releaseOCR();
    await roleJob; await modelRelease;
    await releaseRuntime(waitForFlorenceRelease); await releaseRuntime(() => releaseSemIf());
    if (sequence !== cameraStartSequence || showingList || showingUploadedVideo || document.hidden) return;
    $('start-video').disabled = false;
    await videoCapture.start();
  } catch (error) {
    if (sequence === cameraStartSequence && !showingList && !showingUploadedVideo) status(error.message, true);
  } finally {
    if (sequence === cameraStartSequence && !releaseBlocked) $('start-video').disabled = false;
  }
}

function iconButton(label, path, className) {
  const button = element('button', undefined, className);
  button.setAttribute('aria-label', label);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const shape = document.createElementNS(svg.namespaceURI, 'path');
  shape.setAttribute('d', path);
  svg.append(shape);
  button.append(svg);
  return button;
}

function renderList() {
  const focused = document.activeElement;
  const focusedId = focused.closest?.('#card-list li')?.dataset.cardId;
  const focusedAction = focused.dataset?.action;
  if (!reviewRun && $('deck-strategy').value === 'auto') {
    const saved = [...cards.values()].find(card => card.advice?.model === activePipeline().reviewModel && card.advice.context === contextKey(deckContext()) && card.advice?.pool === poolKey());
    $('strategy-result').hidden = !saved;
    if (saved) $('strategy-result').textContent = `Suggested strategy: ${strategies[saved.advice.strategy]}. ${saved.advice.strategyReason || ''}`;
  }
  $('count').textContent = cards.size;
  const copies = [...cards.values()].reduce((total, card) => total + card.quantity, 0);
  $('collection-total').textContent = `${cards.size} unique ${cards.size === 1 ? 'card' : 'cards'} · ${copies} ${copies === 1 ? 'copy' : 'copies'}`;
  if ($('review-status').textContent === 'Collect cards to start a review.' && cards.size) $('review-status').textContent = 'Start deck review when ready. Model files download only then.';
  $('review').disabled = !activePipeline().reviewModel || cards.size === 0 || Boolean(reviewRun || roleRun);
  $('deck-colors').disabled = Boolean(reviewRun || roleRun) || $('deck-color-mode').value === 'auto';

  $('export').disabled = cards.size === 0;
  $('edit-list').disabled = Boolean(reviewRun || roleRun);
  const pendingRoles = pendingRoleCards(cards.values(), activePipeline()).length;
  $('label-roles').disabled = !pendingRoles || Boolean(reviewRun || roleRun);
  $('label-roles').textContent = `Start processing${pendingRoles ? ` (${pendingRoles})` : ''}`;
  $('processing-model').disabled = Boolean(reviewRun || roleRun);
  $('import-collection').disabled = Boolean(reviewRun || roleRun);
  $('stop-roles').hidden = !roleRun;
  $('card-list').dataset.editing = String(editingList);
  const tagFilter = $('filter-tag');
  const allTags = [...new Set([...cards.values()].flatMap(roleTags))].sort();
  const tagValues = ['', 'untagged', ...allTags];
  if (JSON.stringify([...tagFilter.options].map(option => option.value)) !== JSON.stringify(tagValues)) {
    const selected = tagFilter.value; tagFilter.replaceChildren();
    for (const [value, label] of [['', 'All tags'], ['untagged', 'Not tagged'], ...allTags.map(tag => [tag, tag])]) {
      const option = element('option', label); option.value = value; tagFilter.append(option);
    }
    tagFilter.value = tagValues.includes(selected) ? selected : '';
  }
  const filters = collectionFilters();
  const context = deckContext(), pool = poolKey();
  const visible = [...cards.values()].filter(card => matchesCollection(card, filters, context, pool, { tags: roleTags(card), reviewModel: activePipeline().reviewModel }));
  const activeCount = filters.colors.length + ['type', 'mana', 'tag', 'review'].filter(key => filters[key]).length;
  $('filter-summary').textContent = activeCount ? `Filters · ${activeCount} active` : 'Filters';
  $('search-results').hidden = false;
  $('search-results').textContent = `${visible.length} of ${cards.size} cards shown`;
  $('clear-filters').disabled = !activeCount && !filters.query;
  $('empty').hidden = visible.length > 0;
  $('empty').textContent = cards.size ? 'No cards match. Clear filters or try another search.' : 'Your collection is empty. Point the camera at your cards.';
  const oldRows = new Map([...$('card-list').children].map(row => [row.dataset.cardId, row]));
  const visibleIds = new Set(visible.map(card => card.id));
  for (const [id, row] of oldRows) if (!visibleIds.has(id)) row.remove();
  for (const card of visible) {
    if (oldRows.has(card.id)) {
      const input = oldRows.get(card.id).querySelector('input');
      if (input !== document.activeElement && !input.validity.customError) input.value = card.quantity;
      const row = oldRows.get(card.id);
      row.querySelector('.advice').replaceWith(adviceView(card));
      input.disabled = Boolean(reviewRun || roleRun);
      row.querySelector('.card-actions').hidden = !editingList;
      row.querySelector('.remove').disabled = Boolean(reviewRun || roleRun);
      continue;
    }
    const row = element('li');
    row.dataset.cardId = card.id;
    const summary = element('button', undefined, 'card-summary');
    summary.setAttribute('aria-label', `View ${card.name} details`);
    summary.dataset.action = 'view';
    const heading = element('span', undefined, 'card-heading');
    const mana = element('span', undefined, 'mana-value');
    mana.append(element('span', 'MV', 'mana-label'), element('span', card.manaValue ?? '—'));
    mana.setAttribute('aria-label', `Mana value ${card.manaValue ?? 'unknown'}`);
    heading.append(element('strong', card.name));
    const facts = element('span', undefined, 'card-facts');
    facts.append(element('span', card.type, 'card-type'));
    const face = card.faces[0];
    if (face?.power != null && face?.toughness != null) {
      const stats = element('span', undefined, 'card-stats');
      stats.id = `card-stats-${card.id}`;
      stats.append(element('span', 'P/T', 'stat-label'), element('span', `${face.power} / ${face.toughness}`));
      stats.title = `Power ${face.power}, toughness ${face.toughness}`;
      stats.setAttribute('aria-label', stats.title);
      summary.setAttribute('aria-describedby', stats.id);
      facts.append(stats);
    }
    const identity = element('span', undefined, 'card-identity');
    const colorNames = { W: 'White', U: 'Blue', B: 'Black', R: 'Red', G: 'Green' };
    const colors = ['W', 'U', 'B', 'R', 'G'].filter(color => card.colorIdentity?.includes(color));
    identity.setAttribute('aria-label', `Color identity: ${colors.map(color => colorNames[color]).join(', ') || 'Colorless'}`);
    identity.setAttribute('role', 'img');
    identity.title = identity.getAttribute('aria-label');
    for (const color of colors.length ? colors : ['C']) {
      const mark = element('span', color, `identity-mark identity-${color}`);
      mark.setAttribute('aria-hidden', 'true'); identity.append(mark);
    }
    const cost = element('span', undefined, 'card-cost');
    cost.append(identity, mana); heading.append(cost);
    const imageURL = cardImageURL(card);
    if (imageURL) {
      const window = element('span', undefined, 'card-image-window');
      const image = element('img', undefined, 'collection-card-image');
      image.src = imageURL; image.alt = card.name; image.width = 488; image.height = 680;
      image.loading = 'lazy'; image.decoding = 'async'; image.referrerPolicy = 'no-referrer';
      // The text heading stays available until an image actually loads.
      image.addEventListener('load', () => { row.classList.add('has-card-image'); });
      image.addEventListener('error', () => { window.remove(); row.classList.remove('has-card-image'); });
      window.append(image); summary.append(window);
    }
    summary.append(heading, facts);
    summary.append(adviceView(card));
    summary.addEventListener('click', () => showDetail(card));
    const quantity = element('div', undefined, 'quantity');
    const count = element('input');
    count.type = 'number'; count.min = '1'; count.max = '999'; count.step = '1';
    count.disabled = Boolean(reviewRun || roleRun);
    count.value = card.quantity; count.inputMode = 'numeric';
    count.dataset.action = 'quantity';
    count.setAttribute('aria-label', `${card.name} quantity`);
    const error = element('span', 'Enter a whole number from 1 to 999.', 'quantity-error');
    error.id = `quantity-error-${card.id}`; error.hidden = true; error.setAttribute('role', 'alert');
    count.setAttribute('aria-describedby', error.id);
    count.addEventListener('input', () => {
      const value = Number(count.value);
      const valid = /^\d+$/.test(count.value) && Number.isInteger(value) && value >= 1 && value <= 999;
      count.setCustomValidity(valid ? '' : error.textContent);
      count.setAttribute('aria-invalid', String(!valid)); error.hidden = valid;
      if (valid) { card.quantity = value; persist(); renderList(); }
    });
    const quantityLabel = element('label', 'Qty');
    count.id = `quantity-${card.id}`; quantityLabel.htmlFor = count.id;
    quantity.append(quantityLabel, count, error);
    const remove = iconButton(`Remove ${card.name}`, 'M5 6h14M9 6V3h6v3M7 6l1 15h8l1-15M10 10v7M14 10v7', 'remove');
    remove.dataset.action = 'remove';
    remove.disabled = Boolean(reviewRun || roleRun);
    remove.addEventListener('click', () => {
      const next = row.nextElementSibling || row.previousElementSibling;
      acceptance.remove(card); persist(); renderList();
      toast(`Removed ${card.name}`);
      const nextName = next?.querySelector('strong')?.textContent;
      [...$('card-list').querySelectorAll('.card-summary')].find(node => node.querySelector('strong').textContent === nextName)?.focus();
    });
    const controls = element('div', undefined, 'card-actions');
    controls.hidden = !editingList;
    controls.append(quantity, remove);
    row.append(summary, controls);
    $('card-list').append(row);
  }
  if (!$('detail').hidden && cards.has(detailCardId)) $('detail-content').querySelector('.advice')?.replaceWith(adviceView(cards.get(detailCardId), true));
  if (focusedId && !focused.isConnected) {
    const row = [...$('card-list').children].find(node => node.dataset.cardId === focusedId);
    const target = row && [...row.querySelectorAll('button,input')].find(node => node.dataset.action === focusedAction && !node.disabled);
    (target || row?.querySelector('.card-summary'))?.focus({ preventScroll: true });
  }
}

function showDetail(card) {
  detailCardId = card.id;
  detailScroll = window.scrollY;
  $('list-view').hidden = true;
  $('detail').hidden = false;
  const content = $('detail-content');
  content.replaceChildren(element('h2', card.name));
  for (const face of card.faces) {
    const section = element('section', undefined, 'card-face');
    if (face.image && new URL(face.image).hostname.endsWith('scryfall.io')) {
      const image = element('img'); image.src = face.image; image.alt = face.name;
      image.width = 488; image.height = 680;
      image.addEventListener('error', () => image.remove());
      section.append(image);
    }
    const text = element('div');
    if (card.faces.length > 1) text.append(element('h3', face.name, 'face-name'));
    text.append(element('p', `${face.manaCost || 'No mana cost'} · ${face.type}`, 'facts'), element('p', face.text || 'No rules text.', 'rules'));
    if (face.power !== undefined) text.append(element('p', `Power / toughness: ${face.power} / ${face.toughness}`, 'facts'));
    section.append(text); content.append(section);
  }
  content.append(adviceView(card, true));
  const note = element('p', 'Rules and stats from Scryfall. AI suggestions may be wrong; check card rules and deck legality.', 'detail-note');
  content.append(note);
  if (card.url && new URL(card.url).hostname === 'scryfall.com') {
    const link = element('a', 'View on Scryfall'); link.href = card.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; content.append(link);
  }
  $('detail-back').focus();
  window.scrollTo(0, 0);
}

function deckContext() {
  return { colors: [...$('deck-colors').querySelectorAll('input:checked')].map(input => input.value), format: $('deck-format').value, strategy: $('deck-strategy').value, ...($('deck-color-mode').value === 'auto' ? { colorMode: 'auto' } : {}) };
}
let selectedStrategy, selectedColors;
function poolKey() { return JSON.stringify([...cards.values()].map(card => [card.id, card.quantity]).sort((a, b) => a[0].localeCompare(b[0]))); }
function roleTags(card) {
  const pipeline = activePipeline();
  if (pipeline.labelModel && card.labeling?.model === pipeline.labelModel) return card.labeling.tags;
  return pipeline.reviewModel && card.categories?.model === pipeline.reviewModel ? card.categories.tags : [];
}
function labelingView(card) {
  const labeling = card.labeling;
  if (!activePipeline().labelModel || labeling?.model !== activePipeline().labelModel) return null;
  const view = element('span', undefined, 'label-answers');
  const labels = { agreement: 'Models agree', 'partial-agreement': 'Partial agreement', conflict: 'Models disagree', partial: 'Incomplete comparison', unknown: 'No role chosen', unavailable: 'Labeling unavailable', labeled: 'Role labeled' };
  view.append(element('span', labels[labeling.status], `label-status label-${labeling.status}`));
  for (const answer of labeling.answers) {
    const text = answer.error ? `Unavailable: ${answer.error}` : answer.tags.length ? answer.tags.join(', ') : 'Unknown';
    view.append(element('span', `${answer.source}: ${text}`, 'label-source'));
  }
  return view;
}
function adviceView(card, detailed = false) {
  const group = element('span', undefined, 'advice');
  const tags = roleTags(card);
  const labels = labelingView(card); if (labels) group.append(labels);
  if (tags.length) {
    const tagList = element('span', undefined, 'card-tags');
    for (const tag of tags) tagList.append(element('span', tag, 'card-tag'));
    group.append(tagList);
  }
  const advice = card.advice;
  const state = reviewState(card, deckContext(), poolKey(), activePipeline().reviewModel);
  if (state === 'include' || state === 'exclude') {
    group.append(element('span', advice.include ? 'Include in deck' : 'Leave out of deck', advice.include ? 'include-yes' : 'include-no'));
    if (detailed) group.append(element('span', advice.reason, 'advice-reason'));
  } else group.append(element('span', advice ? 'Review outdated' : 'Not reviewed', 'advice-pending'));
  return group;
}
function modelRequest(data, run, { pipelineAuthorized = false, onProgress, releaseAfterResult = pipelineAuthorized } = {}) {
  if (!activePipeline().reviewModel) throw new Error('This pipeline collects cards without AI review. Choose a review pipeline in Settings.');
  if (!modelWorker) modelWorker = new Worker(new URL('./decision-worker.js', import.meta.url), { type: 'module' });
  const requestWorker = modelWorker;
  const phaseLabel = $('review-status').textContent;
  const finishModel = trackLocalModel('Qwen card review');
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => fail(new Error('The model took too long. Try again on a device with more GPU memory.')), 10 * 60 * 1000);
    const cleanup = () => { finishModel(); clearTimeout(timer); run.signal.removeEventListener('abort', aborted); requestWorker.removeEventListener('message', message); requestWorker.removeEventListener('error', failed); };
    const fail = error => { cleanup(); reject(error); };
    const aborted = () => fail(new DOMException('Stopped', 'AbortError'));
    const failed = () => fail(new Error('The local model could not run. Try a WebGPU browser with more GPU memory and check your connection.'));
    const message = ({ data }) => {
      if (data.type === 'progress') {
        if (onProgress) onProgress('Preparing Qwen 2.5 on this device…');
        else $('review-status').textContent = `Loading local model: ${data.text}`;
      }
      else if (data.type === 'ready') { recordRuntimeEvent('label-ready', { model: activePipeline().reviewModel, backend: 'WebGPU' }); if (!onProgress) $('review-status').textContent = phaseLabel; }
      else if (data.type === 'error') {
        const error = new Error(data.text || 'The local model could not finish this pass. Prepare its files in Settings and retry.');
        if (/not prepared|files.*missing|prepare this pipeline in Settings/i.test(error.message)) preparedModels.delete('qwen25');
        recordRuntimeEvent('label-error', { model: activePipeline().reviewModel, releaseFailed: Boolean(data.releaseFailed) });
        if (data.releaseFailed) blockModelRelease(error);
        fail(error);
      }
      else if (data.type === 'result') { recordRuntimeEvent(releaseAfterResult ? 'label-released' : 'label-result', { model: data.runtimeModel }); cleanup(); resolve({ ...data.advice, runtimeModel: data.runtimeModel }); }
    };
    run.signal.addEventListener('abort', aborted, { once: true });
    requestWorker.addEventListener('message', message);
    requestWorker.addEventListener('error', failed);
    recordRuntimeEvent('label-start', { model: activePipeline().reviewModel, stage: data.task });
    requestWorker.postMessage({ ...data, modelId: activePipeline().reviewModel, releaseAfterResult });
  });
}
for (const [value, label] of Object.entries(strategies)) {
  const option = element('option', label); option.value = value; $('deck-strategy').append(option);
}
try {
  const saved = JSON.parse(localStorage.getItem('mtg-deck-context:v1') || 'null');
  if (saved && ['limited', 'standard', 'commander'].includes(saved.format) && (saved.strategy === 'auto' || Object.hasOwn(strategies, saved.strategy)) && Array.isArray(saved.colors)) {
    $('deck-color-mode').value = saved.colorMode === 'auto' ? 'auto' : 'manual';
    $('deck-format').value = saved.format; $('deck-strategy').value = saved.strategy;
    for (const input of $('deck-colors').querySelectorAll('input')) input.checked = saved.colors.includes(input.value);
  }
} catch { /* Deck settings are optional. */ }
$('deck-review').addEventListener('change', event => {
  $('colors-result').hidden = true; selectedColors = null;
  selectedStrategy = null; $('strategy-result').hidden = true;
  try { localStorage.setItem('mtg-deck-context:v1', JSON.stringify(deckContext())); } catch { /* Review works without persistence. */ }
  $('review').textContent = 'Start deck review';
  $('review-status').textContent = 'Deck settings changed. Review again to update recommendations.';
  renderList();
});
$('deck-review').addEventListener('submit', async event => {
  event.preventDefault();
  if (reviewRun || roleRun || !activePipeline().reviewModel || !showingList || document.hidden || !cards.size) return;
  let adapter;
  try { adapter = await navigator.gpu?.requestAdapter(); } catch { /* GPU may be disabled. */ }
  if (!adapter) {
    $('review-status').textContent = 'WebGPU is unavailable. Try current Chrome or Edge with hardware acceleration enabled.'; return;
  }
  if (reviewRun || roleRun || !activePipeline().reviewModel || !showingList || document.hidden || !cards.size) return;
  const run = new AbortController(); reviewRun = run;
  const reviewModel = activePipeline().reviewModel;
  $('strategy-result').hidden = true;
  let context = deckContext(), key = contextKey(context);
  const poolSignature = poolKey();
  selectedStrategy = null; selectedColors = null;
  const snapshot = [...cards.values()];
  cancelAcquisition(); $('stop-review').hidden = false;
  for (const input of $('deck-review').querySelectorAll('input,select')) input.disabled = true;
  renderList();
  let reviewed = 0;
  try {
    await readingQueue.catch(() => {}); run.signal.throwIfAborted();
    await modelRelease; await releaseOCR(); run.signal.throwIfAborted();
    await releaseRuntime(disposeRecognitionPipelines); run.signal.throwIfAborted();
    await ensureProcessingReady(activePipeline(), run.signal, message => { $('review-status').textContent = message; });
    for (let i = 0; i < snapshot.length; i++) {
      const card = snapshot[i];
      if (!cards.has(card.id) || card.categories?.model === reviewModel) continue;
      $('review-status').textContent = `Pass 1 of 3 · tagging ${i + 1} of ${snapshot.length}: ${card.name}`;
      const categories = await modelRequest({ task: 'categories', card }, run);
      run.signal.throwIfAborted();
      if (cards.get(card.id) !== card) continue;
      card.categories = { ...categories, model: reviewModel }; persist(); renderList();
    }
    if ($('deck-color-mode').value === 'auto') {
      $('review-status').textContent = 'Choosing deck colors from your collection…';
      const suggestion = await modelRequest({ task: 'colors', context, cards: [...cards.values()] }, run);
      run.signal.throwIfAborted();
      for (const input of $('deck-colors').querySelectorAll('input')) input.checked = suggestion.colors.includes(input.value);
      context = deckContext(); key = contextKey(context);
      selectedColors = { ...suggestion, model: reviewModel, context: key, pool: poolSignature };
      try { localStorage.setItem('mtg-deck-context:v1', JSON.stringify(context)); } catch { /* Optional settings. */ }
      const names = { W: 'White', U: 'Blue', B: 'Black', R: 'Red', G: 'Green' };
      $('colors-result').textContent = `Suggested colors: ${suggestion.colors.map(color => names[color]).join(' + ') || 'Colorless'}. ${suggestion.reason}`;
      $('colors-result').hidden = false;
    }
    const poolCards = activePipeline().labelModel
      ? [...cards.values()].map(card => ({ ...card, categories: { ...card.categories, tags: roleTags(card) } }))
      : [...cards.values()];
    const pool = summarizePool(poolCards, context.colors);
    let strategy = context.strategy;
    if (strategy === 'auto') {
      $('review-status').textContent = 'Pass 2 of 3 · choosing the best supported strategy…';
      selectedStrategy = await modelRequest({ task: 'strategy', context, pool }, run);
      run.signal.throwIfAborted(); strategy = selectedStrategy.strategy;
      $('strategy-result').textContent = `Suggested strategy: ${strategies[strategy]}. ${selectedStrategy.reason}`;
      $('strategy-result').hidden = false;
    }
    for (let i = 0; i < snapshot.length; i++) {
      const card = snapshot[i]; if (!cards.has(card.id)) continue;
      $('review-status').textContent = `Pass 3 of 3 · deck decision ${i + 1} of ${snapshot.length}: ${card.name}`;
      const advice = await modelRequest({ task: 'decision', card, context: { ...context, strategy }, pool }, run);
      run.signal.throwIfAborted();
      if (cards.get(card.id) !== card) continue;
      card.advice = { ...advice, tags: card.categories.tags, model: reviewModel, context: key, pool: poolSignature, strategy, strategyReason: selectedStrategy?.reason || null, colorSuggestion: selectedColors || null };
      reviewed++; persist(); renderList();
    }
    $('review-status').textContent = `Review complete: ${reviewed} cards. Open a card to see the reason for its recommendation.`;
  } catch (error) {
    $('review-status').textContent = run.signal.aborted ? 'Review stopped. Completed tags and decisions are saved; review again to continue.' : error.message;
  } finally {
    try { await queueModelRelease(); } catch (error) { $('review-status').textContent = error.message; }
    reviewRun = null; $('stop-review').hidden = true;
    for (const input of $('deck-review').querySelectorAll('input,select')) input.disabled = false;
    renderList();
  }
});
function blockModelRelease(error) {
  releaseBlocked = true;
  try { localStorage.setItem(modelActivityKey, JSON.stringify({ label: 'Model memory release', at: Date.now() })); } catch { /* Optional recovery marker. */ }
  modelRelease = Promise.reject(error); modelRelease.catch(() => {});
  recordRuntimeEvent('model-release-failed', { releaseFailed: true });
}
async function releaseRuntime(release) {
  try { return await release(); }
  catch (error) { blockModelRelease(error); throw error; }
}
function queueModelRelease() {
  const owned = modelWorker; modelWorker = null;
  if (owned) {
    const cleanup = releaseRuntime(() => releaseModelWorker(owned));
    modelRelease = Promise.all([modelRelease, cleanup]).then(() => {});
  }
  modelRelease.catch(() => {});
  return modelRelease;
}
function stopReview() { roleRun?.abort(); reviewRun?.abort(); queueModelRelease(); }
$('stop-review').addEventListener('click', stopReview);

function setListEditing(editing) {
  editingList = editing;
  $('edit-list').setAttribute('aria-pressed', String(editing));
  $('edit-list').textContent = editing ? 'Done editing' : 'Edit list';
  if (!editing) for (const row of $('card-list').children) {
    const input = row.querySelector('input');
    input.value = cards.get(row.dataset.cardId).quantity;
    input.setCustomValidity(''); input.removeAttribute('aria-invalid');
    row.querySelector('.quantity-error').hidden = true;
  }
  renderList();
}
$('edit-list').addEventListener('click', () => setListEditing(!editingList));
let resumeAfterCollection = false;
$('view-toggle').addEventListener('click', () => {
  if (showingFrames) closeFrames(false);
  if (!showingList) resumeAfterCollection = Boolean($('video').srcObject);
  if (showingUploadedVideo) { uploadedVideo.stop(); showingUploadedVideo = false; $('video-upload-screen').hidden = true; }
  if (showingList) setListEditing(false);
  stopReview(); capturePreparation?.abort();
  if (showingList) collectionScroll = window.scrollY; else photoScroll = window.scrollY;
  cancelAcquisition();
  showingList = !showingList;
  document.body.dataset.screen = showingList ? 'collection' : 'entry';
  $('capture-algorithm').closest('label').hidden = false;
  $('scan').hidden = showingList;
  $('collection').hidden = !showingList;
  $('view-toggle').setAttribute('aria-expanded', String(showingList));
  $('view-toggle').firstChild.textContent = showingList ? 'Collect ' : 'Cards ';
  $('count').hidden = showingList;
  window.scrollTo(0, showingList ? collectionScroll : photoScroll);
  if (!showingList && resumeAfterCollection) safeStartCamera();
});
$('detail-back').addEventListener('click', () => {
  const name = $('detail-content').querySelector('h2')?.textContent;
  $('detail').hidden = true; $('list-view').hidden = false;
  [...$('card-list').querySelectorAll('.card-summary')].find(node => node.querySelector('strong').textContent === name)?.focus({ preventScroll: true });
  window.scrollTo(0, detailScroll);
});
$('search').addEventListener('input', renderList);
function collectionFilters() {
  return { query: $('search').value.trim(), colors: [...$('filter-colors').querySelectorAll('input:checked')].map(input => input.value), type: $('filter-type').value, mana: $('filter-mana').value, tag: $('filter-tag').value, review: $('filter-review').value };
}
$('collection-filters').addEventListener('change', renderList);
$('clear-filters').addEventListener('click', () => {
  $('search').value = '';
  for (const input of $('filter-colors').querySelectorAll('input')) input.checked = false;
  for (const id of ['filter-type', 'filter-mana', 'filter-tag', 'filter-review']) $(id).value = '';
  renderList();
});
function setImageView(view) {
  $('card-list').dataset.imageView = view;
  $('view-strips').setAttribute('aria-pressed', String(view === 'strips'));
  $('view-full').setAttribute('aria-pressed', String(view === 'full'));
}
$('view-strips').addEventListener('click', () => setImageView('strips'));
$('view-full').addEventListener('click', () => setImageView('full'));
$('export').addEventListener('click', () => {
  const data = exportCollection([...cards.values()], deckContext(), new Date(), { reviewModel: activePipeline().reviewModel });
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2) + '\n'], { type: 'application/json' }));
  const link = element('a'); link.href = url; link.download = 'magic-collection.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
async function labelCollectedCard(card, pipeline, signal, onProgress, { keepWarm = false } = {}) {
  await modelRelease; signal.throwIfAborted();
  if (!pendingRoleCards([card], pipeline).length) return;
  const current = () => { signal.throwIfAborted(); return selectedProcessingModel === pipeline.id && cards.get(card.id) === card; };
  if (!current()) return;
  const answers = [], usesQwen = ['qwen25-only', 'reconciled-qwen25-semif'].includes(pipeline.labelModel);
  let semIf;
  const progress = message => { if (current()) onProgress?.(message); };
  if (usesQwen) {
    // The previous card may have left SemIf warm. Never hold both model stacks.
    semIf = await import('./sem-if-reader.js'); if (!current()) return; await releaseRuntime(() => semIf.releaseSemIf());
    let ownedQwenWorker;
    try {
      progress('Reading card roles with Qwen 2.5…');
      const request = modelRequest({ task: 'categories', card }, { signal }, { pipelineAuthorized: true, onProgress: progress, releaseAfterResult: !keepWarm });
      ownedQwenWorker = modelWorker;
      const result = await request;
      if (!current()) return;
      answers.push({ source: 'Qwen 2.5', tags: result.tags, runtimeModel: result.runtimeModel });
    } catch (error) {
      signal.throwIfAborted(); answers.push({ source: 'Qwen 2.5', tags: [], error: error.message });
    } finally {
      if (!keepWarm) {
        await releaseRuntime(() => releaseModelWorker(ownedQwenWorker));
        if (modelWorker === ownedQwenWorker) modelWorker = null;
      }
    }
  }
  if (pipeline.labelModel !== 'qwen25-only') {
    try {
      semIf ||= await import('./sem-if-reader.js'); if (!current()) return;
      // A saved/manual Qwen review may also have left a worker resident.
      await releaseRuntime(() => releaseModelWorker(modelWorker)); modelWorker = null;
      progress('Labeling card roles with OpenJev / Qwen 3…');
      const result = await semIf.semIfLabel(card, { signal, onProgress: progress, onStage: phase => recordRuntimeEvent('label-stage', { model: pipeline.labelModel, ...phase }) });
      if (!current()) return;
      answers.push({ source: 'OpenJev / Qwen 3', tags: result.tags, distribution: result.distribution, abstained: result.abstained, runtimeModel: result.runtimeModel });
    } catch (error) {
      if (error.releaseFailed) { blockModelRelease(error); throw error; }
      if (/not prepared|files.*missing|prepare.*Settings/i.test(error.message)) preparedModels.delete('semif');
      signal.throwIfAborted(); answers.push({ source: 'OpenJev / Qwen 3', tags: [], error: error.message });
    }
  }
  if (!current()) return;
  let tags = [], status;
  if (answers.length === 1) {
    tags = answers[0].tags; status = answers[0].error ? 'unavailable' : tags.length ? 'labeled' : 'unknown';
  } else {
    const [qwen, openJev] = answers;
    tags = qwen.tags.filter(tag => openJev.tags.includes(tag));
    if (answers.some(answer => answer.error)) status = answers.every(answer => answer.error) ? 'unavailable' : 'partial';
    else if (!qwen.tags.length || !openJev.tags.length) status = !qwen.tags.length && !openJev.tags.length ? 'unknown' : 'partial';
    else if (!tags.length) status = 'conflict';
    else status = tags.length === qwen.tags.length && tags.length === openJev.tags.length ? 'agreement' : 'partial-agreement';
  }
  // Shared tags are an intersection, never an average of unlike model scores.
  card.labeling = { model: pipeline.labelModel, tags, status, answers }; persist(); renderList();
}
$('stop-roles').addEventListener('click', () => roleRun?.abort());
$('label-roles').addEventListener('click', async () => {
  if (roleRun || reviewRun || !showingList) return;
  const pipeline = activePipeline();
  cancelAcquisition();
  const run = new AbortController(); roleRun = run; renderList();
  let finishModel = () => {};
  const previous = readingQueue;
  const job = (async () => {
    try {
      $('role-status').textContent = 'Stopping capture before labeling…';
      await previous; await modelRelease; run.signal.throwIfAborted();
      await releaseOCR(); await releaseRuntime(() => releaseFlorence()); run.signal.throwIfAborted();
      await ensureProcessingReady(pipeline, run.signal, message => { $('role-status').textContent = message; });
      finishModel = trackLocalModel(`${pipeline.name} role batch`);
      const result = await runLabelBatch({ cards: cards.values(), pipeline, signal: run.signal,
        labelCard: (card, pair, signal, options) => labelCollectedCard(card, pair, signal, message => { $('role-status').textContent = message; }, options),
        onProgress: ({ completed, total }) => { $('role-status').textContent = `Labeling card roles · ${completed} / ${total}`; },
      });
      $('role-status').textContent = `Labeled ${result.completed} cards. You can return to the camera.`;
    } catch (error) {
      $('role-status').textContent = error.name === 'AbortError' ? 'Processing canceled. Completed labels are saved.' : `${error.message} Start processing to retry.`;
    } finally {
      try { await releaseRuntime(() => releaseModelWorker(modelWorker)); modelWorker = null; await releaseRuntime(() => releaseSemIf()); }
      catch (error) { $('role-status').textContent = error.message; }
      finishModel(); if (roleRun === run) roleRun = null; renderList();
    }
  })();
  roleJob = job;
  readingQueue = job.catch(() => {});
  await job;
});
async function processCapture(canvas, signal, feedback, manualRegions) {
  const collected = [];
  feedback.onPhase?.('reading');
  const matches = await readFrame(canvas, { signal, manualRegions, detectedRegions: feedback.detectedRegions, strictShortNames: ['video-still', 'uploaded-video'].includes(feedback.source),
    onCandidates: feedback.onCandidates, onTiming: feedback.onTiming,
    onLoading: progress => { if (progress) feedback.onProgress?.(progress.message || 'Preparing saved Florence files…'); },
    onProgress: (index, total) => feedback.onProgress?.(typeof index === 'string' ? index : `Checking area ${index} / ${total}…`),
    onMatch: async match => {
      signal.throwIfAborted(); feedback.onMatch?.(match);
      const previous = new Set(cards.keys());
      const card = await acceptance.accept(match, { signal, source: feedback.source });
      if (card && !previous.has(card.id)) { collected.push(card.name); feedback.onCollected?.(card); }
      signal.throwIfAborted();
    },
  });
  matches.collected = collected;
  if (!feedback.background && collected.length) toast(`Collected ${collected.length === 1 ? collected[0] : `${collected.length} new cards`}.`);
  return matches;
}
let captureFlashTimer;
function onFrameQueued({ source }) {
  const flash = $('capture-flash');
  clearTimeout(captureFlashTimer);
  flash.dataset.source = source; flash.dataset.count = String(Number(flash.dataset.count || 0) + 1);
  flash.classList.remove('captured'); void flash.offsetWidth; flash.classList.add('captured');
  captureFlashTimer = setTimeout(() => flash.classList.remove('captured'), 240);
}
const journal = createCaptureJournal();
let showingFrames = false, savingFrames = 0, savedFrameCount = 0, frameReadRun, captureSequence = 0;
const captureSaves = new Map();
let retryingCaptures = false;
async function refreshRecovery() {
  try {
    const records = await journal.list();
    savedFrameCount = records.length;
    framesView.render(records, retryingCaptures || quickFrames.count > 0);
    $('read-frames').disabled = retryingCaptures || !records.some(frame => frame.state !== 'done');
    $('stop-frame-reading').hidden = !retryingCaptures;
    const saved = records.filter(frame => frame.state !== 'done');
    $('capture-recovery').hidden = !saved.length;
    $('capture-recovery-status').textContent = `${saved.length} unread ${saved.length === 1 ? 'capture' : 'captures'} saved on this device. Open Frames to review and read them.`;
  } catch { /* Collection remains available when storage is disabled. */ }
}
function saveCapture(canvas, metadata) {
  const saved = journal.save(canvas, metadata);
  saved.ready = saved.ready.catch(error => { status(`${error.message} This capture cannot be recovered after reload.`, true); return null; });
  return saved;
}
const framesView = savedFramesView({ list: $('frame-history-list'), count: $('frame-history-count'), read: key => readSavedFrames(key), remove: async key => {
  try { await journal.remove(key); await refreshRecovery(); }
  catch (error) { $('frames-status').textContent = error.message; }
} });
async function updateFrameState(id, changes) {
  const saved = captureSaves.get(id); const key = await saved?.ready;
  try { if (key) await journal.update(key, changes); }
  catch (error) { $('frames-status').textContent = `Could not save reading status. ${error.message}`; }
}
const quickFrames = quickFrameQueue({
  capacity: 2,
  process: async (canvas, signal, { id }) => {
    const key = await captureSaves.get(id)?.ready; signal.throwIfAborted();
    const saved = (await journal.list()).find(frame => frame.key === key);
    backgroundReadStatus = 'Reading captured frame…';
    try { return await processCapture(canvas, signal, { source: saved?.source || 'video-still', background: true,
      onProgress: message => { backgroundReadStatus = message; $('frames-status').textContent = message; },
      onTiming: timing => { $('video-stage').dataset.analysisTiming = JSON.stringify(timing); },
    }); } finally { backgroundReadStatus = null; }
  },
  onChange: (_count, { manualCount, autoCount }) => videoCapture.updateQuick(manualCount, autoCount),
  onCancelled: ({ kind, id }) => { updateFrameState(id, { state: 'captured', message: '' }).finally(() => { captureSaves.delete(id); refreshRecovery(); }); videoCapture.frameCompleted?.({ kind, cancelled: true }); },
  onStarted: ({ id }) => updateFrameState(id, { state: 'reading', message: 'Reading captured frame…' }),
  onQueued: ({ id, recoveryKey }) => {
    captureSaves.set(id, { key: recoveryKey, ready: Promise.resolve(recoveryKey) });
  },
  onResult: (matches, id, { kind }) => {
    const names = [...new Set(matches.map(match => match.name))], collected = matches.collected || [];
    updateFrameState(id, { state: 'done', message: '', names, collected }).finally(() => { captureSaves.delete(id); refreshRecovery(); });
    if (kind === 'manual' || collected.length) notices.push(frameNotification({ names, collected, kind, id }));
    videoCapture.frameCompleted?.({ kind, matches });
  },
  onError: (error, id, { kind }) => {
    updateFrameState(id, { state: 'error', message: error?.message || 'Try another frame.' }).finally(() => { captureSaves.delete(id); refreshRecovery(); });
    toast(`${kind === 'auto' ? 'Auto frame' : `Quick Frame ${id}`} couldn’t be read. ${error?.message || 'Try another frame.'}`, true, kind === 'auto' ? { key: 'auto-error', cooldown: 30000 } : {});
    videoCapture.frameCompleted?.({ kind, matches: [], error });
  },
});
function queueCapturedFrame(canvas, options) { return quickFrames.enqueue(canvas, options); }
function captureOnly(canvas, { kind = 'manual', source = 'video-still' } = {}) {
  const id = ++captureSequence; savingFrames++;
  videoCapture.updateQuick(savingFrames);
  const saved = journal.save(canvas, { kind, source, state: 'captured' });
  saved.ready.then(() => {
    videoCapture.frameQueued({ id, kind, canvas });
    onFrameQueued({ source }); status('Frame saved. Open Frames to read card names.');
    return refreshRecovery();
  }).catch(error => {
    autoScan.checked = false; autoScan.dispatchEvent(new Event('change'));
    status(`${error.message} Frame was not saved.`, true);
  }).finally(() => {
    canvas.width = canvas.height = 0; savingFrames--;
    videoCapture.updateQuick(savingFrames); videoCapture.frameCompleted({ kind });
  });
  return id;
}
const autoScan = $('auto-scan');
try { autoScan.checked = false; } catch { /* Camera controls work without storage. */ }
autoScan.addEventListener('change', () => {
  try { localStorage.setItem('mtg-auto-scan:v1', autoScan.checked ? 'on' : 'off'); } catch { /* Device preference is optional. */ }
});
const videoCapture = walkthrough({
  auto: autoScan, video: $('video'), still: $('camera-still'), stage: $('video-stage'), start: $('start-video'), pause: $('pause-video'),
  close: $('close-video'), flip: $('switch-camera'), native: $('native-photo'), snapshot: $('frame-photo'), quick: $('quick-frame'), quickCount: $('quick-count'), sensor: $('sensor-photo'), sensorSupport: $('sensor-support'), fallback: $('native-fallback'), file: $('camera-file'),
  acknowledgment: $('capture-acknowledgment'), sourceLabel: $('capture-source'), steady: $('steady-progress'), boxes: $('video-boxes'),
  onStatus: status, onStart: safeStartCamera,
  queueAvailable: () => savingFrames < 2 && savedFrameCount + savingFrames < 60, cancelQuick: () => quickFrames.cancel(),
  queueFrame: canvas => captureOnly(canvas, { kind: 'manual' }),
  queueAutoFrame: canvas => captureOnly(canvas, { kind: 'auto' }), cancelAuto: () => quickFrames.cancelAuto(),
  onEntering: () => { if (showingFrames) closeFrames(false); document.body.classList.add('walkthrough'); },
  onLeaving: () => document.body.classList.remove('walkthrough'),
  readPhoto: async (canvas, signal, source) => {
    const saved = journal.save(canvas, { kind: 'photo', source, state: 'captured' });
    await saved.ready; await refreshRecovery();
    onFrameQueued({ source }); status('Photo saved. Open Frames to read card names.');
  },
});
const uploadedVideo = initVideoUpload({ elements: {
  input: $('video-file-input'), video: $('upload-video'), start: $('video-analysis-start'), stop: $('video-analysis-stop'), back: $('video-analysis-back'),
  status: $('video-analysis-status'), progress: $('video-analysis-progress'), metadata: $('video-analysis-metadata'),
},
  processCapture,
  ensureReady: () => ensureCaptureReady(),
  onOpen: () => {
    cancelAcquisition(); stopReview(); notices.clear(); showingUploadedVideo = true; showingList = false;
    $('scan').hidden = $('collection').hidden = true; $('video-upload-screen').hidden = false;
    document.body.dataset.screen = 'uploaded-video'; $('view-toggle').firstChild.textContent = 'Cards '; $('view-toggle').setAttribute('aria-expanded', 'false');
    $('count').hidden = false; window.scrollTo(0, 0);
  },
  onBack: () => {
    showingUploadedVideo = false; $('video-upload-screen').hidden = true; $('scan').hidden = false;
    document.body.dataset.screen = 'entry'; safeStartCamera();
  },
  onError: error => { if (error?.name !== 'AbortError') status(error?.message || 'Video analysis failed.', true); },
});
$('nav-open-video').addEventListener('click', () => uploadedVideo.open());

let capturePreparation;
async function ensureCaptureReady() {
  if (selectedRecognitionPipeline !== 'vision' || isFlorenceReady()) return true;
  capturePreparation?.abort();
  const run = capturePreparation = new AbortController();
  $('capture-preparation').hidden = false; $('capture-preparation-retry').hidden = true;
  const report = progress => {
    if (run.signal.aborted) return;
    $('capture-preparation-status').textContent = typeof progress === 'string' ? progress : progress.message || 'Preparing Vision…';
    const bar = $('capture-preparation-progress');
    if (Number.isFinite(progress.percent)) { bar.max = 100; bar.value = progress.percent; } else bar.removeAttribute('value');
  };
  try {
    await readingQueue; run.signal.throwIfAborted();
    await modelRelease; await releaseRuntime(() => releaseSemIf()); await releaseOCR(); run.signal.throwIfAborted();
    await prepareFlorence({ signal: run.signal, onLoading: report }); run.signal.throwIfAborted();
    $('capture-preparation').hidden = true; return true;
  } catch (error) {
    if (!run.signal.aborted) { report(`${error.message} OCR remains available.`); $('capture-preparation-retry').hidden = false; }
    return false;
  } finally { if (capturePreparation === run) capturePreparation = null; }
}
async function chooseCaptureAlgorithm() {
  const id = $('capture-algorithm').value;
  if (!captureAlgorithms.some(item => item.id === id)) return;
  capturePreparation?.abort(); selectedRecognitionPipeline = id;
  try { localStorage.setItem(pipelineStorageKey, id); } catch { /* Optional preference. */ }
  $('capture-algorithm-note').textContent = captureAlgorithms.find(item => item.id === id).note;
  $('capture-preparation').hidden = true;
}
$('capture-algorithm').value = selectedRecognitionPipeline;
$('capture-algorithm-note').textContent = captureAlgorithms.find(item => item.id === selectedRecognitionPipeline).note;
$('capture-algorithm').addEventListener('change', chooseCaptureAlgorithm);
$('capture-preparation-cancel').addEventListener('click', () => { $('capture-algorithm').value = 'ocr'; chooseCaptureAlgorithm(); });
$('capture-preparation-retry').addEventListener('click', () => readSavedFrames());
async function ensureProcessingReady(pipeline, signal, report) {
  const descriptor = modelDescriptors[pipeline.id];
  if (preparedModels.has(descriptor.id)) return;
  signal.throwIfAborted();
  $('processing-progress').hidden = false;
  const progress = value => {
    if (signal.aborted) return;
    report(typeof value === 'string' ? value : value.message || 'Preparing processing model…');
    const bar = $('processing-progress');
    if (Number.isFinite(value.percent)) { bar.max = 100; bar.value = value.percent; } else bar.removeAttribute('value');
  };
  try {
    if (pipeline.id === 'semif') {
      try { await prepareSemIf({ signal, onProgress: progress }); } finally { disposeSemIf(); }
    } else await prepareReviewModel(descriptor.modelId, { signal, onProgress: progress });
    signal.throwIfAborted(); preparedModels.add(descriptor.id);
  } finally { $('processing-progress').hidden = true; }
}
function updateReviewPipeline() {
  const pipeline = activePipeline();
  $('processing-model').value = selectedProcessingModel;
  $('processing-model-note').textContent = pipeline.note;
  document.querySelector('.review-disclosure').hidden = !pipeline.reviewModel;
  $('review-model-note').textContent = 'Optional deck review runs locally. Its files download when you start; completed results stay saved.';
  renderList();
}
$('processing-model').addEventListener('change', () => {
  if (roleRun || reviewRun) { $('processing-model').value = selectedProcessingModel; return; }
  if (!processingModels.some(item => item.id === $('processing-model').value)) return;
  selectedProcessingModel = $('processing-model').value;
  try { localStorage.setItem(processingStorageKey, selectedProcessingModel); } catch { /* Optional preference. */ }
  $('role-status').textContent = 'Start processing when ready. Model files download only then.';
  updateReviewPipeline();
});
$('copy-runtime-diagnostics').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(exportRuntimeDiagnostics()); $('runtime-diagnostics-status').textContent = 'Troubleshooting details copied. Images and card names excluded.'; }
  catch { $('runtime-diagnostics-status').textContent = 'This browser could not copy the details.'; }
});
// Advanced actions close their menu before handing off to camera/editor UI.
$('capture-options').addEventListener('click', event => {
  if (event.target.closest('button') && event.target.id !== 'copy-runtime-diagnostics') $('capture-options').hidePopover?.();
});
$('import-collection').addEventListener('click', () => { $('collection-file').value = ''; $('collection-file').click(); });
$('collection-file').addEventListener('change', async () => {
  const file = $('collection-file').files[0]; if (!file || roleRun || reviewRun) return;
  try {
    if (file.size > 20 * 1024 * 1024) throw new Error('Collection file is too large (20 MB maximum).');
    const imported = parseCollectionImport(await file.text());
    const result = mergeCollectionImport(cards, imported); acceptance.rememberAll(); persist(); renderList();
    $('import-status').textContent = `Imported ${result.added} cards. Kept ${result.skipped} existing cards unchanged.`;
  } catch (error) { $('import-status').textContent = error.message; }
});
async function readSavedFrames(key) {
  if (retryingCaptures || roleRun || reviewRun || quickFrames.count) return;
  cancelAcquisition(); retryingCaptures = true; const session = frameReadRun = new AbortController(); await refreshRecovery();
  $('capture-algorithm').disabled = true; $('frames-status').textContent = 'Preparing reader…';
  try {
    if (!await ensureCaptureReady() || session.signal.aborted) return;
    for (const saved of await journal.list()) {
      if (session.signal.aborted || document.hidden) break;
      if (key ? saved.key !== key : saved.state === 'done') continue;
      const url = URL.createObjectURL(saved.blob);
      try {
        const image = new Image(); image.src = url; await image.decode();
        if (session.signal.aborted || document.hidden) break;
        const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
        canvas.getContext('2d').drawImage(image, 0, 0);
        $('frames-status').textContent = 'Reading saved frame…';
        queueCapturedFrame(canvas, { kind: 'manual', recoveryKey: saved.key });
        await quickFrames.idle();
      } finally { URL.revokeObjectURL(url); }
    }
    if (!session.signal.aborted) $('frames-status').textContent = 'Reading finished. Recognized names are saved in Cards. Frames are kept until you remove them.';
  } catch (error) { $('frames-status').textContent = `Frames remain saved. ${error.message}`; }
  finally { frameReadRun = null; retryingCaptures = false; $('capture-algorithm').disabled = false; await refreshRecovery(); }
}
function stopFrameReading() { frameReadRun?.abort(); capturePreparation?.abort(); quickFrames.cancel(); $('frames-status').textContent = 'Reading stopped. Your frames are saved.'; }
let resumeAfterFrames = false;
function openFrames() {
  if (showingList) { showingList = false; $('view-toggle').firstChild.textContent = 'Cards '; $('count').hidden = false; $('view-toggle').setAttribute('aria-expanded', 'false'); }
  resumeAfterFrames = Boolean($('video').srcObject);
  cancelAcquisition(); stopReview(); showingFrames = true;
  $('scan').hidden = $('collection').hidden = true; $('frame-history-popover').hidden = false;
  document.body.dataset.screen = 'frames'; $('frame-history-toggle').setAttribute('aria-pressed', 'true');
  refreshRecovery(); window.scrollTo(0, 0);
}
function closeFrames(resume = true) {
  stopFrameReading(); showingFrames = false; $('frame-history-popover').hidden = true;
  $('scan').hidden = false; document.body.dataset.screen = 'entry'; $('frame-history-toggle').setAttribute('aria-pressed', 'false');
  if (resume && resumeAfterFrames) safeStartCamera();
}
$('frame-history-toggle').addEventListener('click', () => showingFrames ? closeFrames() : openFrames());
$('frames-back').addEventListener('click', () => closeFrames());
$('read-frames').addEventListener('click', () => readSavedFrames());
$('stop-frame-reading').addEventListener('click', stopFrameReading);
$('retry-captures').addEventListener('click', openFrames); $('retry-captures').textContent = 'Open Frames';
$('reader-preparation-slot').append($('capture-preparation'), $('capture-algorithm-note'));
$('discard-captures').addEventListener('click', async () => {
  if (quickFrames.count || retryingCaptures) return;
  try { for (const saved of await journal.list()) await journal.remove(saved.key); refreshRecovery(); }
  catch (error) { $('capture-recovery-status').textContent = error.message; }
});
refreshRecovery();
updateReviewPipeline();
function suspend() { stopFrameReading(); cancelAcquisition(); stopReview(); uploadedVideo.stop(); notices.clear(); capturePreparation?.abort(); }
document.addEventListener('visibilitychange', () => { if (document.hidden && !videoCapture.awaitingNative()) suspend(); });
window.addEventListener('pagehide', () => {
  recordRuntimeEvent('page-hide');
  suspend();
  disposePerception();
  readingQueue.finally(() => disposeRecognitionPipelines()).catch(() => {});
  const pending = workerPromise; workerPromise = null;
  if (pending) readingQueue.finally(() => pending.then(instance => instance.terminate()).catch(() => {}));
});
renderList();
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--header-height', `${document.querySelector('header').offsetHeight}px`);
}).observe(document.querySelector('header'));


if (previousModelInterruption) status('Previous processing was interrupted. Saved cards are available; capture and processing restart only when you choose.', true);
