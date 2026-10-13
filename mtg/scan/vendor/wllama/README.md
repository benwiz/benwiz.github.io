Vendored wllama 3.6.1 runtime from SemIf's browser demo:
https://github.com/jiangxiluning/Visual-Jev/tree/2d68c11011a16e5ef3a473dedc25ef64acf088de/webgpu-demo/vendor/wllama

Upstream runtime: https://github.com/ngxson/wllama (MIT; LICENCE).
The adapted SemIf prompt/readout retains its MIT notice in SEMIF-LICENSE.
Qwen model weights remain external, Apache 2.0 licensed, at the pinned URL in
sem-if-config.js. Runtime is downloaded with the app; 639 MB weights load only
when the chosen labeling pipeline runs. No custom scalar head is used.

On engines without JSPI or memory64, wllama automatically uses its pinned
compatibility build at @wllama/wllama-compat@3.6.1 on jsDelivr. It uses CPU when
no WebGPU adapter is available; the selected model and readout remain the same.
