import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import {
  RepertoireSection,
  StyledList,
  StyledHeader,
  ListField,
  RepertoireLink,
  RepertoireButtons
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToggleRepertoire } from '../../saturdaylive/saturdayLiveReducer';
import { RepertoireAlphabetical, RepertoireByStyle } from './components';
import { alphabeticalRepertoire, byStyleRepertoire } from '../../downloadPaths';

export const Repertoire = () => {
  const repertoireAlphabetical = useAppSelector(
    ({ saturdayLive }) => saturdayLive.repertoireAlphabetical
  );
  const dispatch = useAppDispatch();

  return (
    <MainContentBox>
      <h1>Repertuar</h1>

      <RepertoireSection>
        <RepertoireButtons $modified>
          <StyledHeader $modified>Pobierz repertuar</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoireLink href={alphabeticalRepertoire}>
                Podział alfabetyczny
              </RepertoireLink>
            </ListField>
            <ListField>
              <RepertoireLink href={byStyleRepertoire}>
                Podział stylistyczny
              </RepertoireLink>
            </ListField>
          </StyledList>
        </RepertoireButtons>

        <RepertoireButtons>
          <StyledHeader>Sortuj</StyledHeader>
          <StyledList>
            <ListField>
              <RepertoireLink
                $modified
                as="button"
                onClick={() => dispatch(setToggleRepertoire())}
              >
                Wyświetl podział{' '}
                {!repertoireAlphabetical ? 'alfabetyczny' : 'stylistyczny'}
              </RepertoireLink>
            </ListField>
          </StyledList>
        </RepertoireButtons>
      </RepertoireSection>

      {repertoireAlphabetical ? (
        <RepertoireAlphabetical />
      ) : (
        <RepertoireByStyle />
      )}

      <ContactBox />
    </MainContentBox>
  );
};
