import React from 'react';

import { NavLink } from 'react-router-dom';
import { email, facebookURL, instagramURL, youtubeURL } from '../../media';
import {
  StyledFooter,
  FooterList,
  FooterParagraph,
  MailBoxIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MediaLink,
  MediaLinkBox
} from './styled';

const Footer = () => (
  <StyledFooter>
    <FooterList>
      <li>
        <NavLink to="/">
          <img src="sat7.gif" height={50} />
        </NavLink>
      </li>

      <li>
        <MediaLinkBox>
          <MediaLink href={`mailto:${email}`}>
            <MailBoxIcon />
            E-mail
          </MediaLink>

          <MediaLink href={facebookURL} target="_blank">
            <FacebookIcon />
            Facebook
          </MediaLink>
          <MediaLink href={instagramURL} target="_blank">
            <InstagramIcon />
            Instagram
          </MediaLink>

          <MediaLink href={youtubeURL} target="_blank">
            <YoutubeIcon />
            YouTube
          </MediaLink>
        </MediaLinkBox>
      </li>
    </FooterList>

    <FooterParagraph>
      Wszystkie prawa zatrzeżone | SaturdayLive | 2023
    </FooterParagraph>
  </StyledFooter>
);

export default Footer;
