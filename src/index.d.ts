// import { Common } from './rtsp-player.common';
// export declare class RtspPlayer extends Common {
//   // define your typings manually
//   // or..
//   // take the ios or android .d.ts files and copy/paste them here
// }

import { AbstractRtspPlayer } from './rtsp-player.common';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

declare export class RtspPlayer extends AbstractRtspPlayer {

    constructor(args: CreateViewEventData) {
        super(args);
    }

}