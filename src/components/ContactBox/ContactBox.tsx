import React from 'react';
import {
  ContactArticle,
  ContactSection,
  ContactMailLink,
  ContactMailIcon,
  ImportantParagraph,
  Imagebox,
  DescriptionBox
} from './styled';
import { email } from '../../media';

export const ContactBox = () => (
  <ContactArticle>
    <h2>Zapraszamy do współpracy!</h2>

    <ContactSection>
      <DescriptionBox>
        <p>
          Jesteśmy z Warszawy, ale dojedziemy w&nbsp;każde miejsce
          w&nbsp;Polsce.
        </p>
        <ImportantParagraph>
          Koncerty, Imprezy firmowe, Wesela - to nasz żywioł!
        </ImportantParagraph>
        <p>
          W sprawie rezerwacji zespołu, oraz w&nbsp;razie jakichkolwiek pytań
          prosimy o&nbsp;kontakt:
        </p>
        <ContactMailLink href={`mailto:${email}`}>
          <ContactMailIcon />
          {email}
        </ContactMailLink>
      </DescriptionBox>
      <Imagebox>
        <img
          height={90}
          width={268}
          src="sat7.gif"
          alt="logo SaturdayLive"
          aria-label="strona główna"
        />
      </Imagebox>
    </ContactSection>
  </ContactArticle>
);
