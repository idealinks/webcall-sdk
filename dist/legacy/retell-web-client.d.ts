import { EventEmitter } from "eventemitter3";
import { AnalyzerComponent, StartCallConfig, TransportKind } from "../transport";
export interface WebCallClientOptions {
    defaultTransport?: TransportKind;
}
export declare class WebCallClient extends EventEmitter {
    private transport?;
    private connected;
    private defaultTransport;
    isAgentTalking: boolean;
    analyzerComponent: AnalyzerComponent;
    private captureAudioFrame?;
    constructor(options?: WebCallClientOptions);
    startCall(startCallConfig: StartCallConfig): Promise<void>;
    startAudioPlayback(): Promise<void>;
    stopCall(): void;
    takeOver(): Promise<void>;
    mute(): void;
    unmute(): void;
    private captureAudioSamples;
    private handleServerEvent;
}
