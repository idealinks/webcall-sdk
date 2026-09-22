// Thinkrr public surface — token-join only. Upstream create/monitor API kept in
// tree but not exported (commented) so vendor names stay out of consumer bundles.

export type { AnalyzerComponent, TransportKind, StartCallConfig } from "./transport";
export { WebCallClient } from "./legacy/retell-web-client";
export type { WebCallClientOptions } from "./legacy/retell-web-client";
export { restoreIceServers, restoreIceUrl } from "./ice-host";

// --- upstream (not exported; re-enable if a consumer needs create/monitor) ---
// export { RetellClient } from "./client";
// export type { RetellClientConfig } from "./client";
// export { CallSession } from "./session/base-session";
// export type { AudioOptions } from "./session/base-session";
// export { WebCallSession } from "./session/web-call-session";
// export type { WebCallOptions } from "./session/web-call-session";
// export { MonitorSession } from "./session/monitor-session";
// export type { MonitorCallOptions } from "./session/monitor-session";
// export type {
//   SessionEvent,
//   SessionEventMap,
//   SessionHooks,
//   SessionStatus,
// } from "./session/events";
// export { RetellApiError } from "./control/api";
// export type { RequestOptions } from "./control/api";
// export * from "./types";
// export { RetellWebClient } from "./legacy/retell-web-client";
// export type { RetellClientOptions } from "./legacy/retell-web-client";
