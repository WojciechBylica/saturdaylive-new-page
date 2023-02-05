import React from 'react';

import YouTube from 'react-youtube';
import './style.css';
import { PlayerProps } from './types';
import { usePlayer } from './usePlayer';

const Player = ({ setHasLoaded, videoId, setShowVideo }: PlayerProps) => {
  const { _onReady, _onStateChange, opts } = usePlayer({
    setHasLoaded,
    setShowVideo
  });

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      onStateChange={_onStateChange}
      className={'videoInner '}
      iframeClassName={'videoInner'}
      opts={opts}
    />
  );
};

export default Player;
