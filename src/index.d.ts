import { AbstractRtspPlayer } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export declare class RtspPlayer extends AbstractRtspPlayer {

    constructor(args: CreateViewEventData);

    startStream(streamUrl: string);

    stopStream();

    release();

    isStreaming(): boolean;
}


