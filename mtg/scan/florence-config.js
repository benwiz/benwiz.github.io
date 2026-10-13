// Released ONNX weights: https://huggingface.co/onnx-community/Florence-2-base-ft/tree/main/onnx
export const florenceModel = Object.freeze({
  id: 'onnx-community/Florence-2-base-ft',
  revision: 'e88a44eaf3791a35eae0c5a47b3dbcd36e67eb6f',
  runtime: 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js',
  runtimeVersion: '3.8.1',
  task: '<OCR_WITH_REGION>',
  license: 'MIT',
  device: 'wasm',
  dtype: 'q8',
  // embed_tokens + vision_encoder + encoder_model + decoder_model_merged;
  // tokenizer and browser runtime downloads are additional.
  approximateModelBytes: 275_000_000,
  approximateWebGpuModelBytes: 357_000_000,
  downloadLabel: 'About 275–357 MB of model weights, depending on CPU or GPU support, plus the reader runtime. Runs on this device.',
});
