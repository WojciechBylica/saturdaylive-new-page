import React, { useState } from 'react';

import YouTube, { YouTubeProps } from 'react-youtube';
import './style.css';

const Player = ({
  setHasLoaded,
  videoId
}: {
  setHasLoaded: (hasLoaded: boolean) => void;
  videoId: string;
}) => {
  const [number, setNumber] = useState(0);
  console.log(number);

  const _onReady: YouTubeProps['onReady'] = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
  };
  const _onStateChange: YouTubeProps['onStateChange'] = (event) => {
    setNumber(number + 1);
    number + 1 === 3 && event.target.playVideo() && alert();
  };

  //*configuration: https://developers.google.com/youtube/player_parameters *//
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      controls: 2
    }
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      onStateChange={_onStateChange}
      className={'videoInner'}
      iframeClassName={'videoInner'}
      opts={opts}
    />
  );
};

export default Player;
