import styled from 'styled-components';

export const FilmBox = styled.div`
  width: 1200px;
  height: 675px;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    width: 890px;
    height: 506px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    height: calc(100vw * 0.56);
    width: 100%;
  }
`;

export const VideoRatio = styled.div`
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const PlayImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PlayIcon = styled.img`
  height: 42px;
  left: calc(50% - 30px);
  position: absolute;
  top: auto;
  bottom: 10%;
  transition: all 0.3s ease-in-out;
  width: 60px;
  z-index: 1020;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    width: 40px;
    height: 30px;
  }
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
