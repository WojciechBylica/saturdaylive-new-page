import { useEffect, useState } from 'react';

import { YouTubeProps } from 'react-youtube';
import { PlayerProps, PlayingCodes } from './types';

export const usePlayer = ({
  setHasLoaded,
  setShowVideo
}: Omit<PlayerProps, 'videoId'>) => {
  const [playingCode, setPlayingCode] = useState<PlayingCodes>(-2);

  const _onReady: YouTubeProps['onReady'] = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
  };

  const _onStateChange: YouTubeProps['onStateChange'] = (event) => {
    setPlayingCode(event.data as PlayingCodes);
  };

  useEffect(() => {
    if (playingCode === 0) {
      return setShowVideo(false);
    }
  }, [playingCode]);

  //*configuration: https://developers.google.com/youtube/player_parameters *//
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      controls: 2
    }
  };
  return { _onReady, _onStateChange, opts };
};
