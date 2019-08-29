import { RtspPlayer as RtspPlayerBase } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends RtspPlayerBase {

    private playerView: any;

    constructor(context: any) {
        super(context);
        this.playerView = new EzloRTSPView();
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

    public getView() : any {
        return this.playerView;
    }

    public isStreaming(): boolean {
        return this.playerView.playing;
    }

}
