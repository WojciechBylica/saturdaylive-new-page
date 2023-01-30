import React from 'react';

import { repertoireArray } from './repertoireArray';
import {
  ListSection,
  AlphabeticalList,
  RepertoirBigField,
  RepertoirSmallList,
  RepertoirSmallListField,
  ListHeader,
  HeaderImage
} from '../styled';

export const RepertoireByStyle = () => (
  <ListSection>
    <ListHeader>
      <HeaderImage src="favicon.ico" alt="logo" />
      Repertuar SaturdayLive - podział stylistyczny
    </ListHeader>
    <AlphabeticalList $modified>
      {repertoireArray.map(({ title, songs }, index) => (
        <RepertoirBigField key={`songs-group-${index}`}>
          <h3>{title}</h3>
          <RepertoirSmallList>
            {songs.map((song, index) => (
              <RepertoirSmallListField key={`alfabetical-sorted-song-${index}`}>
                {song}
              </RepertoirSmallListField>
            ))}
          </RepertoirSmallList>
        </RepertoirBigField>
      ))}
    </AlphabeticalList>
  </ListSection>
);
