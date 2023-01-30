import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import {
  RepertoirSection,
  StyledList,
  StyledHeader,
  ListField,
  RepertoirLink,
  RepertoireButtons,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToggleRepertoire } from '../../saturdaylive/saturdayLiveReducer';
import { RepertoireAlphabetical, RepertoireByStyle } from './components';

export const Repertoir = () => {
  const repertoireAlphabetical = useAppSelector(
    ({ saturdayLive }) => saturdayLive.repertoireAlphabetical
  );
  const dispatch = useAppDispatch();

  return (
    <MainContentBox>
      <h1>Repertuar</h1>

      <RepertoirSection>
        <RepertoireButtons $modified>
          <StyledHeader>Pobierz repertuar</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoirLink href={'Repertuar-SL-alfabetycznie.pdf'}>
                Podział alfabetyczny
              </RepertoirLink>
            </ListField>
            <ListField>
              <RepertoirLink href={'Repertuar-SL-stylistycznie.pdf'}>
                Podział stylistyczny
              </RepertoirLink>
            </ListField>
          </StyledList>
        </RepertoireButtons>

        <RepertoireButtons>
          <StyledHeader>Sortuj</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoirLink $modified
                as="button"
                onClick={() => dispatch(setToggleRepertoire())}
              >
                Wyświetl podział{' '}
                {!repertoireAlphabetical ? 'alfabetyczny' : 'stylistyczny'}
              </RepertoirLink>
            </ListField>
          </StyledList>
        </RepertoireButtons>
      </RepertoirSection>
      {repertoireAlphabetical ? (
        <RepertoireAlphabetical />
      ) : (
        <RepertoireByStyle />
      )}

      <ContactBox />
    </MainContentBox>
  );
};
