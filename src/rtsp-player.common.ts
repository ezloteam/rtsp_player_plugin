import { Observable } from 'tns-core-modules/data/observable';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";

export class RtspPlayer extends Observable {

  constructor(context: any) {
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

  public getView() : any {
    throw new Error("Method not implemented.");
  }

  public isStreaming(): boolean {
    throw new Error("Method not implemented.");
  }

}