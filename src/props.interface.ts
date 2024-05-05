export interface Props {
  // volume: number;
  // speed: number;
  // playbackRate: number;
  // currentTime: number;
  // duration: number;
  // buffered: number;
  // isFullScreen: boolean;
  // isControls: boolean;
  // isLoop: boolean;
  // isAutoPlay: boolean;
  // isLoaded: boolean;
  // isSeeking: boolean;
  // isEnded: boolean;
  // isPaused: boolean;

  // topContainer: React.RefObject<HTMLDivElement>;
  // leftContainer: React.RefObject<HTMLDivElement>;
  // rightContainer: React.RefObject<HTMLDivElement>;

  // icons?: IconsProps,

  // playerStyle: React.CSSProperties;
  url: string;
  // title: string;
  width: number;
  height: number;

  color?: string;
  // backgroundColor: string;
  // aspectRatio: string;
  // playsInline: boolean;
  // pip: boolean;
  // light: string;
  // poster: string;
  // preload: string;
  // crossOrigin: string;
  // config: object;
  // wrapper: string;
  // fallback: React.ReactNode;
  // className: string;
  // style: object;
  // hidden: boolean;
  // attributes: object;

  onPlay?: () => void;
  onPause?: () => void;
  // onVolumeChange: (volume: number) => void;
  // onSpeedChange: (speed: number) => void;
  // onPlaybackRateChange: (playbackRate: number) => void;
  // onSeek: (time: number) => void;
  onSeeking?: () => void;
  // onSeeked: () => void;
  // onFullScreen: () => void;
  // onControls: () => void;
  // onLoop: () => void;
  // onAutoPlay: () => void;
}

export interface IconProps {
  size: string;
  iconColor?: string;
  color?: string;
}

// Create a new type that combines the required and optional props
type OptionalProps = Omit<Props, "url" | "width" | "height">;

// Make all other props optional
export type PropsWithOptional = Props & Partial<OptionalProps>;
