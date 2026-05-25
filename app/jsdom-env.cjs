const { TestEnvironment } = require("jest-environment-jsdom");
const { TextEncoder, TextDecoder } = require("util");
const { ReadableStream, WritableStream, TransformStream } = require("stream/web");

// Keys to copy from Node.js globals into the JSDOM window.
// JSDOM doesn't implement these, but MSW's interceptors depend on them.
const NODE_GLOBALS_TO_INJECT = [
  "Request", "Response", "Headers", "fetch",
  "FormData", "Blob",
  "BroadcastChannel", "MessageChannel", "MessageEvent", "WebSocket",
];

class JSDOMWithNodeFetchEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    for (const key of NODE_GLOBALS_TO_INJECT) {
      if (globalThis[key] !== undefined) {
        this.global[key] = globalThis[key];
      }
    }
    Object.assign(this.global, { TextEncoder, TextDecoder, ReadableStream, WritableStream, TransformStream });
  }
}

module.exports = JSDOMWithNodeFetchEnvironment;
