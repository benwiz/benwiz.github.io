import { florenceModel } from './florence-config.js';

export async function florenceBackend() {
  let adapter;
  try { adapter = await navigator.gpu?.requestAdapter(); } catch { /* CPU remains available. */ }
  return adapter?.features.has('shader-f16') ? 'WebGPU' : 'CPU';
}

export function florenceFiles(execution) {
  const weights = execution === 'WebGPU'
    ? ['embed_tokens_fp16', 'vision_encoder_fp16', 'encoder_model_q4', 'decoder_model_merged_q4']
    : ['embed_tokens_quantized', 'vision_encoder_quantized', 'encoder_model_quantized', 'decoder_model_merged_quantized'];
  return ['config.json', 'preprocessor_config.json', 'tokenizer_config.json', 'tokenizer.json',
    'generation_config.json', ...weights.map(name => `onnx/${name}.onnx`)];
}

// Mirrors Transformers.js 3.8.1 getModelFile's remote cache key. Downloading
// directly to browser storage never materializes a weight ArrayBuffer in JS,
// imports ONNX, initializes GPU sessions, or retains a model stack in Settings.
export async function cacheFlorenceFiles(execution, { onProgress = () => {}, signal } = {}) {
  const cache = await caches.open('transformers-cache');
  const base = `https://huggingface.co/${florenceModel.id}/resolve/${florenceModel.revision}/`;
  const files = florenceFiles(execution);
  for (let index = 0; index < files.length; index++) {
    signal?.throwIfAborted();
    const file = files[index], url = new URL(file, base).href;
    if (await cache.match(url)) {
      onProgress({ stage: 'checking-files', message: `Florence saved files · ${index + 1} / ${files.length}`, execution });
      continue;
    }
    onProgress({ stage: 'downloading', message: `Downloading Florence · file ${index + 1} / ${files.length}`, execution });
    const response = await fetch(url, { signal });
    // HF's generation config is optional; absence must not prevent a model
    // with defaults from preparing. Other pinned files are required.
    if (response.status === 404 && file === 'generation_config.json') continue;
    if (!response.ok) throw new Error(`Florence file download failed (${response.status}). Retry in Settings.`);
    let stored = response;
    if (response.body && typeof TransformStream === 'function') {
      let loaded = 0, lastReport = 0;
      const total = Number(response.headers.get('content-length'));
      const stream = response.body.pipeThrough(new TransformStream({ transform(chunk, controller) {
        loaded += chunk.byteLength;
        if (performance.now() - lastReport >= 500) {
          lastReport = performance.now();
          onProgress({ stage: 'downloading', execution, message: `Downloading Florence · file ${index + 1} / ${files.length} · ${Math.round(loaded / 1_000_000)} MB${total > 0 ? ` / ${Math.round(total / 1_000_000)} MB` : ''}` });
        }
        controller.enqueue(chunk);
      } }));
      stored = new Response(stream, { status: response.status, statusText: response.statusText, headers: response.headers });
    }
    // No response clone or arrayBuffer: let CacheStorage consume the stream.
    await cache.put(url, stored);
    signal?.throwIfAborted();
  }
}
