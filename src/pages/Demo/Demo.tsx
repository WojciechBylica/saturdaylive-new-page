import React, { lazy, Suspense } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import type { YoutubeLink } from './types';
import { AudioPlayer, MainContentBox, YoutubePlayer } from '../../components';
import { FilmWrapper } from './styled';

const MediaArticle = lazy(() => import('./MediaArticle'));

export const Demo = () => {
  const ytArrayStudio: YoutubeLink[] = [
    {
      label: 'Proud Mary',
      videoId: 'sLoFYoqpJFU'
    },
    {
      label: "Don't Start Now",
      videoId: 'W0rm_XUeJOI'
    }
  ];

  const ytArrayPhone: YoutubeLink[] = [
    {
      label: "You're Simply The Best",
      videoId: 'TjefJuUJi7g'
    },
    {
      label: 'Biała flaga',
      videoId: 'KkxxSbw-er8'
    },
    {
      label: 'SaturdayLive 2022',
      videoId: '_4WFU0oH0E0'
    },
    { label: 'Waiting All Night', videoId: 'IbZYvoqYkCc' }
  ];

  const ytDemoArray = [
    { title: 'Nagrania studyjne', array: ytArrayStudio },
    { title: 'Nagrania wykonane telefonem', array: ytArrayPhone }
  ];

  return (
    <MainContentBox>
      <h1>SaturdayLive - Demo</h1>
      <section>
        <article>
          <h2>Nagrania audio</h2>
          <AudioPlayer />
        </article>

        {ytDemoArray.map(({ title, array }, index) => (
          <article key={`${title}-${index}`}>
            <h2>{title}</h2>
            <FilmWrapper>
              {array.map(({ label, videoId }) => (
                <YoutubePlayer key={nanoid()} label={label} videoId={videoId} />
              ))}
            </FilmWrapper>
          </article>
        ))}
        <Suspense fallback={<div>...</div>}>
          <MediaArticle />
        </Suspense>
      </section>
    </MainContentBox>
  );
};
