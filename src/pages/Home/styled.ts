import styled from 'styled-components';
import foto from './foto1.jpg';
import fotoBgr from './foto2.jpg';
import { ReactComponent as stop } from './stop-svgrepo-com.svg';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${foto});
  height: 700px;
  background-position: center;
  background-attachment: initial;
  background-size: contain;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.backgroundDark};
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    height: 510px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    height: calc(100vw * 0.56);
  }
`;

export const MainHeader = styled.h1`
  font-size: 48px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    font-size: 32px;
  }
  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    margin-top: 0;
    margin-bottom: 12px;
  }
`;

export const MainDescription = styled.p`
  font-size: 24px;
  max-width: 700px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    font-size: 16px;
    max-width: 500px;
  }
  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    max-width: 300px;
    margin-top: 0;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background: rgb(51 51 51 / 30%);
  color: white;
  z-index: 1000;
  display: flex;
  left: 0;
  right: 0;
  height: 700px;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    height: 510px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    height: calc(100vw * 0.56 + 3px);
  }
`;

export const HomeDescription = styled.section`
  margin: 16px 16px 48px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-image: url(${fotoBgr});
`;

export const DescriptionWrapper = styled.div`
  background: ${({ theme }) => theme.color.backgroundLight};
  padding: 16px;
  opacity: 0.9;
  border-radius: 10px;
`;

export const StopButton = styled.button`
  position: absolute;
  bottom: 10%;
  top: auto;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary};
  padding: 0 20px 20px 20px;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    bottom: 3%;
    padding: 0;
  }
`;

export const StopIcon = styled(stop)`
  width: 60px;
  height: 60px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    width: 40px;
    height: 40px;
  }
`;
