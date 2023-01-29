import React from 'react';
import { StyledIframe, PlayerSection } from './styled';

export const AudioPlayer = () => (
  <PlayerSection>
    <StyledIframe
      loading="lazy"
      title="odtwarzacz soundcloud"
      scrolling="no"
      frameBorder="yes"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70362910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  </PlayerSection>
);
