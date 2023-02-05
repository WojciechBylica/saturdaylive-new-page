export type PlayingCodes = -2 | -1 | 0 | 1 | 2 | 3;

export type PlayerProps = {
  setHasLoaded: (hasLoaded: boolean) => void;
  videoId: string;
  setShowVideo: (showVideo: boolean) => void;
};
