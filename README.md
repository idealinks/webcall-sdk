# webcall-sdk

Thinkrr fork of [`retell-client-js-sdk`](https://github.com/RetellAI/retell-client-js-sdk) **v3.0.1**.

Upstream source is left intact. Thinkrr-only deltas are small and marked — look here first:

| What | Where |
| --- | --- |
| LiveKit host (CloudFront) + `thinkrrVoice` host | `src/livekit-transport.ts` (`resolveLiveKitUrl`) |
| `thinkrrVoice?: boolean` on join config | `src/transport.ts` (`StartCallConfig`) |
| `WebCallClient` alias of `RetellWebClient` | `src/index.ts` (bottom) |
| Package name / repo | `package.json` |

Everything else (`client.ts`, `control/`, `session/`, `gateway-transport.ts`, `legacy/retell-web-client.ts`, …) is upstream.

## Thinkrr join (what we use)

Server creates the call; the browser joins with the token:

```ts
import { WebCallClient } from "webcall-sdk";

const client = new WebCallClient();
await client.startCall({ accessToken });
```

`WebCallClient` is `RetellWebClient` aliased in `src/index.ts` — the 3.x token-join
client, on the same `LiveKitTransport` / `GatewayTransport` as `CallSession`.
Consumers import the alias so no vendor name reaches app code.

`url` is not passed, so `resolveLiveKitUrl` picks the CloudFront host (or
`voice-rtc.thinkrr.ai` with `thinkrrVoice: true`). If Vaibe ever returns
`transport: "gateway"`, `callId` and `iceServers` have to be forwarded too.

## Upstream API

Also exported unchanged: `RetellClient`, `RetellWebClient`, sessions, etc. See the [upstream README](https://github.com/RetellAI/retell-client-js-sdk).

## Install (stage branches)

| Consumer branch | Install |
| --- | --- |
| `dev` | `github:idealinks/webcall-sdk#dev` |
| `staging` / `rX.X` | `github:idealinks/webcall-sdk#staging` |
| `main` / prod | `github:idealinks/webcall-sdk#main` |

```
npm run build
npm test
```
