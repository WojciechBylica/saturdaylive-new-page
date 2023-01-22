import React from 'react';
import { StyledPlayerWrapper, StyledPlayerLink, StyledIframe } from './styled';

export const AudioPlayer = () => (
  <article>
    {/* <StyledIframe
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70362910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
    <StyledPlayerWrapper>
      <StyledPlayerLink
        href="https://soundcloud.com/saturdaylive"
        title="SaturdayLive"
        target="_blank"
      >
        SaturdayLive
      </StyledPlayerLink>{' '}
      ·{' '}
      <StyledPlayerLink
        href="https://soundcloud.com/saturdaylive/sets/saturdaylive-demo"
        title="SaturdayLive Demo"
        target="_blank"
      >
        SaturdayLive Demo
      </StyledPlayerLink>
    </StyledPlayerWrapper> */}
    <StyledIframe
      scrolling="no"
      frameBorder="yes"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70362910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
    <StyledPlayerWrapper>
      <StyledPlayerLink
        href="https://soundcloud.com/saturdaylive"
        title="SaturdayLive"
        target="_blank"
      >
        SaturdayLive
      </StyledPlayerLink>{' '}
      ·{' '}
      <StyledPlayerLink
        href="https://soundcloud.com/saturdaylive/sets/saturdaylive-demo"
        title="SaturdayLive Demo"
        target="_blank"
      >
        SaturdayLive Demo
      </StyledPlayerLink>
    </StyledPlayerWrapper>
  </article>
);
