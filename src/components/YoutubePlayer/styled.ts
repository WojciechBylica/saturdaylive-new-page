import styled from 'styled-components';

export const FilmBox = styled.div`
  width: 560px;
  height: 315px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    width: 460px;
    height: 258px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    width: 350px;
    height: 196px;
  }

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    width: calc(100% - 32px);
    height: auto;
  }
`;

export const VideoRatio = styled.div`
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #333;
`;

export const PlayImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PlayIcon = styled.img`
  height: 42px;
  left: calc(50% - 30px);
  position: absolute;
  top: calc(50% - 21px);
  transition: all 0.3s ease-in-out;
  width: 60px;
`;

export const ThumbNailButton = styled.button`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;
