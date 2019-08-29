import { RtspPlayer as RtspPlayerBase } from './rtsp-player.common';

declare var com: any;

export class RtspPlayer extends RtspPlayerBase {

    private playerView: any;

    constructor(context: any) {
        super(context);

        this.playerView = this.createPlayerView(context);
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

    public getView(): any {
        return this.playerView;
    }

    public isStreaming(): boolean {
        return this.playerView.isStreaming();
    }

}