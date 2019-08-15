import { Observable } from 'tns-core-modules/data/observable';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends Observable {

  constructor(args: CreateViewEventData) {
    super();
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

  public isStreaming(): boolean {
    throw new Error("Method not implemented.");
  }

}

export class Utils {

  public static attachView(args: CreateViewEventData, view: any) {
    args.view = view;
  }

}
