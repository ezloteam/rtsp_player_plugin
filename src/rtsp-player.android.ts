import { AbstractRtspPlayer, Utils } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

declare var com: any;

export class RtspPlayer extends AbstractRtspPlayer {

    private playerView: any;

    constructor(args: CreateViewEventData) {
        super(args);

        this.playerView = this.createPlayerView(args.context);
        Utils.attachView(args, this.playerView);
    }

    private createPlayerView(context: any) {
        return new com.ezlo.vlcplayer.RtspPlayerView(context);
    }

    public startStream(streamUrl: String) {
        this.playerView.startStream(streamUrl);
    }

    public stopStream() {
        this.playerView.stopStream();
    }

    public release() {
        this.playerView.release();
    }

    public isStreaming() : boolean {
        return this.playerView.isStreaming();
    }

}