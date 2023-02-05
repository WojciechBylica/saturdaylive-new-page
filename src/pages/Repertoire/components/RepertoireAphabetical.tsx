import React from 'react';

import { repertoireArray } from './repertoireArray';
import {
  ListSection,
  AlphabeticalList,
  RepertoirSmallListField,
  ListHeader,
  HeaderImage
} from '../styled';

export const RepertoireAlphabetical = () => {
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

  const sortedSongs = getSortedSongs(repertoireArray);

  return (
    <ListSection>
      <ListHeader>
        <HeaderImage src="favicon.ico" alt="logo" />
        Repertuar SaturdayLive - podział alfabetyczny
      </ListHeader>
      <AlphabeticalList>
        {sortedSongs.map((song, index) => (
          <RepertoirSmallListField key={`song${index}`}>
            {song}
          </RepertoirSmallListField>
        ))}
      </AlphabeticalList>
    </ListSection>
  );
};
