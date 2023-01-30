import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import {
  RepertoirSection,
  StyledList,
  StyledHeader,
  ListField,
  RepertoirLink,
  ListSection,
  AlfabeticalList,
  RepertoirBigField,
  RepertoirSmallList,
  RepertoirSmallListField,
  ListHeader,
  HeaderImage
} from './styled';
import { repertoirArray } from './repertoirArray';

export const Repertoir = () => {
  const getSortedSongs = (
    repertoirArray: {
      title: string;
      songs: string[];
    }[]
  ) => {
    let songList: string[] = [];
    repertoirArray
      .map(({ songs }) => songs)
      .map((array) => {
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
              >
                Repertuar alfabetycznie
              </RepertoirLink>
            </ListField>
            <ListField>
              <RepertoirLink
                href={'Repertuar-SL-stylistycznie.pdf'}
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

      <ListSection>
        <ListHeader>
          <HeaderImage src="favicon.ico" alt="logo" />
          Repertuar SaturdayLive - podział stylistyczny
        </ListHeader>
        <AlfabeticalList $modified>
          {repertoirArray.map(({ title, songs }, index) => (
            <RepertoirBigField key={`songs-group-${index}`}>
              <h3>{title}</h3>
              <RepertoirSmallList>
                {songs.map((song, index) => (
                  <RepertoirSmallListField
                    key={`alfabetical-sorted-song-${index}`}
                  >
                    {song}
                  </RepertoirSmallListField>
                ))}
              </RepertoirSmallList>
            </RepertoirBigField>
          ))}
        </AlfabeticalList>
      </ListSection>

      <ListSection>
        <ListHeader>
          <HeaderImage src="favicon.ico" alt="logo" />
          Repertuar SaturdayLive - podział alfabetyczny
        </ListHeader>
        <AlfabeticalList>
          {sortedSongs.map((song, index) => (
            <RepertoirSmallListField key={`song${index}`}>
              {song}
            </RepertoirSmallListField>
          ))}
        </AlfabeticalList>
      </ListSection>

      <ContactBox />
    </MainContentBox>
  );
};
