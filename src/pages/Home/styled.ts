import styled from 'styled-components';
import foto from './foto1.jpg';

export const StyledHeader = styled.header`
  position: relative;
  background-image: url(${foto});
  height: 700px;
  margin-bottom: 32px;
  background-position: center;
  background-attachment: initial;
  background-size: contain;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.backgroundDark};
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    height: 510px;
  }

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    height: 260px;
  }
`;

export const MainHeader = styled.h1`
  font-size: 48px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    font-size: 32px;
  }
`;

export const MainDescription = styled.p`
  font-size: 24px;
  max-width: 700px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    font-size: 16px;
    max-width: 500px;
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

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    height: 260px;
  }
`;

export const HomeDescription = styled.section`
  margin: 16px 16px 48px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.color.backgroundLight};
`;
