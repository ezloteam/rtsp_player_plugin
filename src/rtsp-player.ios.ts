import { RtspPlayer as RtspPlayerBase } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends RtspPlayerBase {

    private playerView: any;

    constructor(args: CreateViewEventData) {
        super(args);
        this.playerView = new EzloRTSPView();
        args.view = this.playerView;
    }

    public startStream(streamUrl: string) {
      this.playerView.startStream(streamUrl);
    }

    public stopStream() {
        this.playerView.pause();
    }

    public release() {
        this.playerView.useMemoryWarning();
    }

    public isStreaming(): boolean {
        return this.playerView.playing;
    }

}
