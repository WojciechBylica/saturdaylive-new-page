import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import {
  RepertoirSection,
  StyledList,
  StyledHeader,
  ListField,
  RepertoirLink,
  AlfabeticalSection,
  AlfabeticalList
} from './styled';
import { repertoirArray } from './repertoirArray';
import { nanoid } from '@reduxjs/toolkit';

export const Repertoir = () => {
  const getSortedSongs = (
    repertoirArray: {
      title: string;
      songs: string[];
    }[]
  ) => {
    let songList: string[] = [];
    const songsArrays = repertoirArray.map(({ songs }) => songs);
    songsArrays.map((array) => {
      songList.push(...[...array]);
    });
    return songList.sort((a, b) => a.localeCompare(b));
  };

  const sortedSongs = getSortedSongs(repertoirArray);

  return (
    <MainContentBox>
      <h1>Repertuar</h1>

      <RepertoirSection>
        <article>
          <StyledHeader>Pobierz</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoirLink
                href={'Repertuar-SL-alfabetycznie.pdf'}
                target="_blank"
              >
                Repertuar alfabetycznie
              </RepertoirLink>
            </ListField>
            <ListField>
              <RepertoirLink
                href={'Repertuar-SL-stylistycznie.pdf'}
                target="_blank"
              >
                Repertuar stylistycznie
              </RepertoirLink>
            </ListField>
          </StyledList>
        </article>
        <article>
          <StyledHeader>Sortuj</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoirLink as="button" onClick={() => {}}>
                Repertuar alfabetycznie
              </RepertoirLink>
            </ListField>
            <ListField>
              <RepertoirLink as="button" onClick={() => {}}>
                Repertuar stylistycznie
              </RepertoirLink>
            </ListField>
          </StyledList>
        </article>
      </RepertoirSection>

      <h2>Repertuar stylistycznie</h2>
      <RepertoirSection $modified>
        {repertoirArray.map(({ title, songs }) => (
          <section key={nanoid()}>
            <h3>{title}</h3>
            <ul>
              {songs.map((song) => (
                <li key={nanoid()}>{song}</li>
              ))}
            </ul>
          </section>
        ))}
      </RepertoirSection>

      <h2>Repertuar alfabetycznie</h2>
      <AlfabeticalSection>
        <AlfabeticalList>
          {sortedSongs.map((song, index) => (
            <li key={`song${index}`}>{song}</li>
          ))}
        </AlfabeticalList>
      </AlfabeticalSection>

      <ContactBox />
    </MainContentBox>
  );
};
