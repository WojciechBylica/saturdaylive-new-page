import styled from 'styled-components';
import { ReactComponent as Youtube } from '../../icons/youtube.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as SoundCloud } from '../../icons/soundcloud.svg';
import { ReactComponent as Facebook } from '../../icons/facebook.svg';

export const FilmWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

// export const DemoIframe = styled.iframe`
//     width: 560px;
//     height: 315px;
//     box-shadow: 1px 2px 5px #333;
//     margin: 16px;
//     border-radius: 10px;
//     aspect-ratio: 16/9 !important;

//     @media (max-width: ${({ theme }) => theme.media.xl}px) {
//         width: 460px;
//         height: 258px;
//       }

//       @media (max-width: ${({ theme }) => theme.media.lg}px) {
//         width: 350px;
//         height: 196px;
//       }

//       @media (max-width: ${({ theme }) => theme.media.md}px) {
//         width: calc(100% - 32px);
//         height: auto;
//       }
// `
export const MediaSection = styled.section`
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 1px 2px 4px #333;
  margin: 16px;
  padding: 16px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const MediaLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  text-decoration: none;
  margin: 16px 8px 16px 0;
  padding: 12px 16px;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.linkHoverBackground};
  }
`;

export const YoutubeIcon = styled(Youtube)`
  margin-right: 16px;
  height: 34px;
  width: 34px;
`;

export const InstagramIcon = styled(Instagram)`
  margin-right: 16px;
  height: 34px;
  width: 34px;
`;

export const SoundCloudIcon = styled(SoundCloud)`
  margin-right: 16px;
  height: 34px;
  width: 34px;
`;

export const FacebookIcon = styled(Facebook)`
  margin-right: 16px;
  height: 34px;
  width: 34px;
`;
