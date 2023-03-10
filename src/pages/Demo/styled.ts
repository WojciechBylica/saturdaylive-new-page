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

export const MediaSection = styled.section`
  background: ${({ theme }) => theme.color.backgroundLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-duration: 500ms;

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
