/**
 * Reverse server-side ice_servers host whitening (voiceai → vendor token)
 * without embedding a searchable vendor substring in the bundle.
 *
 * Server replaces the vendor domain token with "voiceai" in urls; we undo with codepoints.
 */
/** Restore one ice url string. */
export declare function restoreIceUrl(url: string): string;
/** Restore ice_servers[].urls in place for RTCPeerConnection. */
export declare function restoreIceServers(iceServers: RTCIceServer[] | undefined): RTCIceServer[] | undefined;
