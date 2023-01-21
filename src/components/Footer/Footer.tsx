import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <MediaLink href="mailto:kontakt@saturdaylive.pl">
            <MailBoxIcon />
            E-mail
          </MediaLink>

          <MediaLink
            href="https://facebook.pl/saturdayliveband"
            target="_blank"
          >
            <FacebookIcon />
            Facebook
          </MediaLink>
          <MediaLink
            href="https://www.instagram.com/saturdayliveband/"
            target="_blank"
          >
            <InstagramIcon />
            Instagram
          </MediaLink>

          <MediaLink
            href="https://youtube.com/c/saturdayliveband"
            target="_blank"
          >
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
