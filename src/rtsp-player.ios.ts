import { AbstractRtspPlayer } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends AbstractRtspPlayer {

    constructor(args: CreateViewEventData) {
        super(args);
    }  
    
    public startStream(streamUrl: string) {
        throw new Error("Method not implemented.");
    }

    public stopStream() {
        throw new Error("Method not implemented.");
    }

    public release() {
        throw new Error("Method not implemented.");
    }

    public isStreaming() : boolean {
        throw new Error("Method not implemented.");
    }

}