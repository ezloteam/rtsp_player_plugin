import { RtspPlayer } from 'nativescript-rtsp-player';

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function creatingView(args: any) {
    let player = new RtspPlayer(args.context);
    player.startStream("rtsp://admin:admin123@192.168.30.74");
    args.view = player.getView();
}
