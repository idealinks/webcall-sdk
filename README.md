# webcall-sdk

Thinkrr fork of [`retell-client-js-sdk`](https://github.com/RetellAI/retell-client-js-sdk) **v3.0.1**.

Upstream source is left intact. Thinkrr-only deltas are small and marked — look here first:

| What | Where |
| --- | --- |
| LiveKit host (CloudFront) + `thinkrrVoice` host | `src/livekit-transport.ts` (`resolveLiveKitUrl`) |
| `thinkrrVoice?: boolean` on join config | `src/transport.ts` (`StartCallConfig`) |
| `WebCallClient` (token-join) | `src/legacy/retell-web-client.ts` + `src/index.ts` |
| Package name / repo | `package.json` |

Upstream create/monitor (`RetellClient`, sessions, …) stays in the tree but is
**not exported** — see commented block in `src/index.ts`.

## Thinkrr join (what we use)

Server creates the call; the browser joins with the token:

```ts
import { WebCallClient } from "webcall-sdk";

const client = new WebCallClient();
await client.startCall({ accessToken });
```

`url` is not passed, so `resolveLiveKitUrl` picks the CloudFront host (or
`voice-rtc.thinkrr.ai` with `thinkrrVoice: true`). For `transport: "gateway"`,
pass `callId`, `iceServers`, and Thinkrr `baseURL` (e.g. `…/voice-agents/v1`; SDK appends `/webrtc/{callId}/…`).

## Upstream API

Not re-exported. Uncomment the block in `src/index.ts` if needed. Upstream docs:
[retell-client-js-sdk](https://github.com/RetellAI/retell-client-js-sdk).
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
