import styled from 'styled-components';
import { ReactComponent as MailBox } from './icons/mailbox.svg';
import { ReactComponent as Facebook } from './icons/facebook.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';
import { ReactComponent as YouTube } from './icons/youtube.svg';

export const StyledFooter = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.navBackground};
  padding: 1rem;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    flex-direction: column;
  }
`;

export const FooterParagraph = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  padding-top: 16px;
`;

export const MediaLinkBox = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    flex-direction: column;
  }
`;

export const MediaLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  padding: 16px;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.color.navColorHover};
  }
`;

export const MailBoxIcon = styled(MailBox)`
  margin-right: 8px;
`;

export const FacebookIcon = styled(Facebook)`
  margin-right: 8px;
`;

export const InstagramIcon = styled(Instagram)`
  margin-right: 8px;
`;

export const YoutubeIcon = styled(YouTube)`
  margin-right: 8px;
`;
