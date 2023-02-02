import React from 'react';

import YouTube, { YouTubeProps } from 'react-youtube';
import './style.css';

const Player = ({
  setHasLoaded,
  videoId
}: {
  setHasLoaded: (hasLoaded: boolean) => void;
  videoId: string;
}) => {
  const _onReady: YouTubeProps['onReady'] = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
    console.log(event.target);
  };

  //*configuration: https://developers.google.com/youtube/player_parameters *//
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      // end: 6,
      loop: 1
      // controls: 0,
    }
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      className={'videoInner'}
      iframeClassName={'videoInner'}
      opts={opts}
    />
  );
};

export default Player;
