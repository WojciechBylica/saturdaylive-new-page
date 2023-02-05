import React, { useTransition, lazy } from 'react';

import {
  FilmBox,
  VideoRatio,
  PlayImage,
  PlayIcon,
  ThumbNailButton
} from './styled';

const Player = lazy(() => import('./Player/Player'));

const YoutubePlayerMain = ({
  videoId,
  label,
  showVideo,
  setShowVideo,
  hasLoaded,
  setHasLoaded
}: {
  videoId: string;
  label: string;
  showVideo: boolean;
  setShowVideo: (showVideo: boolean) => void;
  hasLoaded: boolean;
  setHasLoaded: (hasLoaded: boolean) => void;
}) => {
  const [, startTransition] = useTransition();
  const imgQuality:
    | 'maxresdefault'
    | 'sddefault'
    | 'hqdefault'
    | 'mqdefault'
    | 'default' = 'sddefault';
  return (
    <FilmBox>
      <VideoRatio>
        {(!showVideo || !hasLoaded) && (
          <ThumbNailButton
            onClick={() => {
              startTransition(() => {
                setShowVideo(true);
              });
            }}
          >
            <div>
              <PlayImage
                alt={label}
                src={`https://i.ytimg.com/vi/${videoId}/${imgQuality}.jpg`}
                title={label}
              />
              <PlayIcon
                alt="Odtwórz video"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
              />
            </div>
          </ThumbNailButton>
        )}
        {showVideo && (
          <Player
            videoId={videoId}
            setHasLoaded={setHasLoaded}
            setShowVideo={setShowVideo}
          />
        )}
      </VideoRatio>
    </FilmBox>
  );
};

export default YoutubePlayerMain;
