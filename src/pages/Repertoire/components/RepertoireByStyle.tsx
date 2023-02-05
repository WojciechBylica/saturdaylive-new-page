import React from 'react';

import { repertoireArray } from './repertoireArray';
import {
  ListSection,
  AlphabeticalList,
  RepertoireBigField,
  RepertoireSmallList,
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
        <RepertoireBigField key={`songs-group-${index}`}>
          <h3>{title}</h3>
          <RepertoireSmallList>
            {songs.map((song, index) => (
              <RepertoirSmallListField key={`alfabetical-sorted-song-${index}`}>
                {song}
              </RepertoirSmallListField>
            ))}
          </RepertoireSmallList>
        </RepertoireBigField>
      ))}
    </AlphabeticalList>
  </ListSection>
);
