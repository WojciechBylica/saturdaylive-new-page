import React, { useTransition, useState, lazy } from 'react';

import {
  FilmBox,
  VideoRatio,
  PlayImage,
  PlayIcon,
  ThumbNailButton
} from './styled';

const Player = lazy(() => import('./Player/Player'));

const YoutubePlayer = ({
  videoId,
  label
}: {
  videoId: string;
  label: string;
}) => {
  const [, startTransition] = useTransition();
  const [showVideo, setShowVideo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

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
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              />
              <PlayIcon
                alt="Odtwórz video"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
              />
            </div>
          </ThumbNailButton>
        )}
        {showVideo && <Player videoId={videoId} setHasLoaded={setHasLoaded} />}
      </VideoRatio>
    </FilmBox>
  );
};

export default YoutubePlayer;
