import React from 'react';
import {  StyledIframe } from './styled';

export const AudioPlayer = () => (
  <article>
    <StyledIframe
      scrolling="no"
      frameBorder="yes"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70362910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  </article>
);
