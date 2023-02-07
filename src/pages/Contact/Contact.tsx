import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import { StyledMapIframe } from './styled';

export const Contact = () => (
  <MainContentBox>
    <h1>Kontakt</h1>
    <ContactBox />
    <h2>Nasza lokalizacja</h2>
    <StyledMapIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7556541686185!2d21.035567551120305!3d52.22965696535906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd894bc9d9b5%3A0x2e8fdfac02717940!2ssaturdaylive%20-%20zesp%C3%B3%C5%82%20muzyczny%20na%20imprez%C4%99%20firmow%C4%85%20i%20wesele!5e0!3m2!1spl!2spl!4v1674402785432!5m2!1spl!2spl"
      allowFullScreen={false}
      referrerPolicy="no-referrer-when-downgrade"
      title="Lokalizacja na mapie google"
    />
  </MainContentBox>
);
