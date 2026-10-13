// The phone tier used by https://openjev.com/ (SemIf, formerly OpenJev).
// This is option-token scoring with a frozen Qwen model, not IamBusy's scalar head.
export const semIfModel = Object.freeze({
  name: 'OpenJev / SemIf · Qwen3 0.6B',
  id: 'Qwen3-0.6B-Q8_0',
  runtime: 'wllama 3.6.1',
  downloadBytes: 639446688,
  url: 'https://huggingface.co/Qwen/Qwen3-0.6B-GGUF/resolve/23749fefcc72300e3a2ad315e1317431b06b590a/Qwen3-0.6B-Q8_0.gguf',
  source: 'https://openjev.com/',
});
