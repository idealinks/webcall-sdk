export { RetellClient } from "./client";
export type { RetellClientConfig } from "./client";
export { CallSession } from "./session/base-session";
export type { AudioOptions } from "./session/base-session";
export { WebCallSession } from "./session/web-call-session";
export type { WebCallOptions } from "./session/web-call-session";
export { MonitorSession } from "./session/monitor-session";
export type { MonitorCallOptions } from "./session/monitor-session";
export type {
  SessionEvent,
  SessionEventMap,
  SessionHooks,
  SessionStatus,
} from "./session/events";
export { RetellApiError } from "./control/api";
export type { RequestOptions } from "./control/api";
export type { AnalyzerComponent, TransportKind } from "./transport";
export * from "./types";

// --- 2.x compatibility ---
export { RetellWebClient } from "./legacy/retell-web-client";
export type { RetellClientOptions } from "./legacy/retell-web-client";
export type { StartCallConfig } from "./transport";

// --- Thinkrr ---
// Token-join client under a vendor-neutral name: our server creates the call,
// the browser joins with the token. Same 3.x transports as CallSession.
export { RetellWebClient as WebCallClient } from "./legacy/retell-web-client";
export type { RetellClientOptions as WebCallClientOptions } from "./legacy/retell-web-client";
