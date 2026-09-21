import assert from "node:assert/strict";
import { test } from "node:test";
import * as sdk from "../dist/index.modern.mjs";

test("upstream surface still exported", () => {
  assert.equal(typeof sdk.RetellClient, "function");
  assert.equal(typeof sdk.RetellWebClient, "function");
});

test("Thinkrr alias stays the 3.x join client", () => {
  assert.equal(sdk.WebCallClient, sdk.RetellWebClient);
});

test("gateway without callId emits error (does not hang)", async () => {
  const client = new sdk.WebCallClient();
  const err = await new Promise((resolve) => {
    client.on("error", resolve);
    void client.startCall({
      accessToken: "tok",
      transport: "gateway",
    });
  });
  assert.equal(err, "Error starting call");
});
