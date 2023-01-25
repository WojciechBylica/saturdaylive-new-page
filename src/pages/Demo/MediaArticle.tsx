import React from 'react';

import {
  MediaLink,
  YoutubeIcon,
  SoundCloudIcon,
  InstagramIcon,
  MediaSection,
  LinkBox,
  FacebookIcon
} from './styled';
import {
  facebookURL,
  instagramURL,
  soundCloudURL,
  youtubeURL
} from '../../media';

const MediaArticle = () => (
  <article>
    <h2>Nasze profile w internecie</h2>
    <MediaSection>
      <LinkBox>
        <MediaLink href={youtubeURL} target="_blank">
          <YoutubeIcon />
          Youtube
        </MediaLink>
        <MediaLink href={instagramURL} target="_blank">
          <InstagramIcon />
          Instagram
        </MediaLink>
        <MediaLink href={soundCloudURL} target="_blank">
          <SoundCloudIcon />
          SoundCloud
        </MediaLink>
        <MediaLink href={facebookURL} target="_blank">
          <FacebookIcon />
          Facebook
        </MediaLink>
      </LinkBox>
      <p>
        Więcej materiałów dostępnych jest na naszych profilach YouTube,
        Instagram, SoundCloud, Facebook.
      </p>
    </MediaSection>
  </article>
);

export default MediaArticle;
