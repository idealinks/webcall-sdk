/**
 * Reverse server-side ice_servers host whitening (voiceai → vendor token)
 * without embedding a searchable vendor substring in the bundle.
 *
 * Server replaces the vendor domain token with "voiceai" in urls; we undo with codepoints.
 */

/** Codepoints for the vendor domain token ("retellai"). */
const VENDOR_CODEPOINTS = [
  0x72, 0x65, 0x74, 0x65, 0x6c, 0x6c, 0x61, 0x69,
] as const;

function vendorToken(): string {
  return String.fromCharCode(...VENDOR_CODEPOINTS);
}

/** Restore one ice url string. */
export function restoreIceUrl(url: string): string {
  return url.split("voiceai").join(vendorToken());
}

/** Restore ice_servers[].urls in place for RTCPeerConnection. */
export function restoreIceServers(
  iceServers: RTCIceServer[] | undefined,
): RTCIceServer[] | undefined {
  if (!iceServers?.length) return iceServers;
  return iceServers.map((server) => {
    const urls = server.urls;
    if (typeof urls === "string") {
      return { ...server, urls: restoreIceUrl(urls) };
    }
    if (Array.isArray(urls)) {
      return {
        ...server,
        urls: urls.map((u) => (typeof u === "string" ? restoreIceUrl(u) : u)),
      };
    }
    return server;
  });
}
