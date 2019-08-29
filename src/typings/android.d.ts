declare module com {
	export module ezlo {
		export module vlcplayer {
			export class RtspPlayerView {
				public static class: java.lang.Class<com.ezlo.vlcplayer.RtspPlayerView>;
				public startStream(param0: string): void;
				public release(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public stopStream(): void;
				public isStreaming(): boolean;
			}
		}
	}
}

