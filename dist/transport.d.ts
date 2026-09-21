export type TransportKind = "livekit" | "gateway";
export interface StartCallConfig {
    accessToken: string;
    transport?: TransportKind;
    callId?: string;
    identity?: string;
    baseURL?: string;
    iceServers?: RTCIceServer[];
    url?: string;
    /** Thinkrr fork: connect to voice-rtc.thinkrr.ai instead of the CloudFront host. */
    thinkrrVoice?: boolean;
    listener?: boolean;
    sampleRate?: number;
    captureDeviceId?: string;
    playbackDeviceId?: string;
    emitRawAudioSamples?: boolean;
}
export interface AnalyzerComponent {
    calculateVolume: () => number;
    analyser: AnalyserNode;
    cleanup: () => Promise<void>;
}
export interface TransportHandlers {
    onConnected: () => void;
    onCallReady: (analyzer: AnalyzerComponent | null) => void;
    onData: (event: any) => void;
    onDisconnected: () => void;
    onError: (message: string) => void;
}
export interface Transport {
    connect(handlers: TransportHandlers): Promise<void>;
    setMicEnabled(enabled: boolean): void;
    resumeAudioPlayback(): Promise<void>;
    close(): void;
    takeOver?(): Promise<void>;
}
export declare function selectTransport(config: StartCallConfig, fallback: TransportKind): TransportKind;
