import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

import { AudioPlayer, MainContentBox } from '../../components';
import { facebookURL, instagramURL, soundCloudURL, youtubeURL } from '../../media';
import { FilmWrapper, DemoIframe, MediaLink, YoutubeIcon,SoundCloudIcon, InstagramIcon,MediaSection,LinkBox, FacebookIcon } from './styled';


type YoutubeLink = {
  name: string;
  url: string;
};

export const Demo = () => {
  const ytArrayStudio: YoutubeLink[] = [
    {
      name: 'Proud Mary',
      url: 'https://www.youtube.com/embed/sLoFYoqpJFU'
    },
    {
      name: "Don't Start Now",
      url: 'https://www.youtube.com/embed/W0rm_XUeJOI'
    }
  ];

  const ytArrayPhone: YoutubeLink[] = [
    {
      name: "You're Simply The Best",
      url: 'https://www.youtube.com/embed/TjefJuUJi7g'
    },
    { name: 'Biała flaga', url: 'https://www.youtube.com/embed/KkxxSbw-er8' }
  ];

  return (
    <MainContentBox>
      <h1>SaturdayLive - Demo</h1>
      <section>
        <article>
          <h2>Nagrania audio</h2>
          <AudioPlayer />
        </article>
        <article>
          <h2>Nagrania studyjne</h2>
          <FilmWrapper>
            {ytArrayStudio.map((link) => (
              <DemoIframe
                key={nanoid()}
                src={link.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></DemoIframe>
            ))}
          </FilmWrapper>
        </article>
        <article>
          <h2>Nagrania wykonane telefonem</h2>
          <FilmWrapper>
            {ytArrayPhone.map((link) => (
              <DemoIframe
                key={nanoid()}
                src={link.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></DemoIframe>
            ))}
          </FilmWrapper>
        </article>
        <article>
          <h2>Nasze profile w internecie</h2>
          <MediaSection>
            <LinkBox>
            <MediaLink href={youtubeURL} target='_blank'><YoutubeIcon />Youtube</MediaLink>
            <MediaLink href={instagramURL} target='_blank'><InstagramIcon />Instagram</MediaLink>
            <MediaLink href={soundCloudURL} target='_blank'><SoundCloudIcon />SoundCloud</MediaLink>
            <MediaLink href={facebookURL} target='_blank'><FacebookIcon />Facebook</MediaLink>
            </LinkBox>
          <p>Więcej materiałów dostępnych jest na naszych profilach YouTube, Instagram, SoundCloud, Facebook.</p>
        </MediaSection>
        </article>
      </section>
    </MainContentBox>
  );
};
