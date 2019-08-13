import { Observable } from 'tns-core-modules/data/observable';
import { CreateViewEventData } from "tns-core-modules/ui/placeholder";
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export abstract class AbstractRtspPlayer extends Observable {

  constructor(args: CreateViewEventData) {
    super();
  }

  public abstract startStream(streamUrl: string);

  public abstract stopStream();

  public abstract release();

  public abstract isStreaming() : boolean;

}

export class Utils {

  public static attachView(args: CreateViewEventData, view: any) {
    args.view = view;
  }

}
