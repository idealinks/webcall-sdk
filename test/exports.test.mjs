import assert from "node:assert/strict";
import { test } from "node:test";
import * as sdk from "../dist/index.modern.mjs";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dist = join(dirname(fileURLToPath(import.meta.url)), "../dist/index.modern.mjs");

test("Thinkrr join client exported", () => {
  assert.equal(typeof sdk.WebCallClient, "function");
});

test("upstream vendor names are not re-exported", () => {
  assert.equal(sdk.RetellClient, undefined);
  assert.equal(sdk.RetellWebClient, undefined);
  assert.equal(sdk.RetellApiError, undefined);
});

test("restoreIceUrl undoes voiceai whitening", () => {
  const vendor = String.fromCharCode(0x72, 0x65, 0x74, 0x65, 0x6c, 0x6c);
  assert.equal(
    sdk.restoreIceUrl("turns:turn.voiceaiai.com:443"),
    `turns:turn.${vendor}ai.com:443`,
  );
});

test("dist bundle has no searchable vendor token", () => {
  const src = readFileSync(dist, "utf8");
  const needle = String.fromCharCode(0x72, 0x65, 0x74, 0x65, 0x6c, 0x6c);
  assert.equal(src.includes(needle), false, `bundle must not contain ${needle}`);
  assert.equal(src.toLowerCase().includes(needle), false);
});

test("gateway without callId emits error (does not hang)", async () => {
  const client = new sdk.WebCallClient();
  const err = await new Promise((resolve) => {
    client.on("error", resolve);
    void client.startCall({
      accessToken: "tok",
      transport: "gateway",
      baseURL: "https://example.test/v1/voice-agents",
    });
  });
  assert.equal(err, "Error starting call");
});

test("gateway without baseURL emits error", async () => {
  const client = new sdk.WebCallClient();
  const err = await new Promise((resolve) => {
    client.on("error", resolve);
    void client.startCall({
      accessToken: "tok",
      transport: "gateway",
      callId: "call_1",
    });
  });
  assert.equal(err, "Error starting call");
});
