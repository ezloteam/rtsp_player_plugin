import { AbstractRtspPlayer } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends AbstractRtspPlayer {

    private playerView: any;

    constructor(args: CreateViewEventData) {
        super(args);

        //let frame = new CGRect(0,0,200,100);
        this.playerView = new EzloRTSPView();
        // this.player.frame = frame;
        args.view = this.playerView;
    }

    public startStream(streamUrl: string) {
      this.playerView.startStream("rtsp://admin:admin123@192.168.30.73");
    }

    public stopStream() {
        this.playerView.pause();
    }

    public release() {
        this.playerView.useMemoryWarning();
    }

    public isStreaming() : boolean {
        return this.playerView.playing;
    }

}
