import styled, { css } from 'styled-components';
import { ReactComponent as Lidl } from './images/lidl.svg';
import { ReactComponent as Casino } from './images/casinos-poland.svg';
import { ReactComponent as OnTraco } from './images/ontraco.svg';
import { ReactComponent as Warsaw } from './images/ww.svg';

export const AboutBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    display: block;
  }
`;

export const AboutArticle = styled.article`
  display: flex;
  margin: 0 16px 32px 16px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.color.backgroundTransparent};

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ParagraphBox = styled.div`
  padding: 16px;
`;

export const RowArticle = styled(AboutArticle)`
  padding: 16px;
  flex-direction: column;
`;

export const AboutImg = styled.img`
  width: 200px;
  height: 180px;
  border-radius: 10px 0 10px 0;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
    border-radius: 10px 10px 0 0;
  }
`;

export const AboutParagraph = styled.p<{ $modified?: boolean }>`
  margin-top: 0;
  padding-left: 20px;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    padding-left: 0;
  }

  ${({ $modified }) =>
    $modified &&
    css`
      padding-left: 0;
    `};
`;

export const AboutSection = styled.section<{ $wrap?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-wrap: wrap;
    `};
`;

export const CertImg = styled.img`
  margin: 20px;
`;

export const LidlLogo = styled(Lidl)`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

export const CasionosLogo = styled(Casino)`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

export const OnTracoLogo = styled(OnTraco)`
  width: 200px;
  height: 34px;
  margin: 20px;
`;

export const WarsawLogo = styled(Warsaw)`
  width: 200px;
  height: 200px;
  margin: 20px;
`;
