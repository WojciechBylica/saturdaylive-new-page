import React from 'react';

import { ContactBox, MainContentBox } from '../../components';
import SLOnStage from './images/IMG_6574.jpg';
import MMWedding from './images/IMG_6581.jpg';
import Cert1 from './certs/cert1.png';
import Cert2 from './certs/cert2.jpg';
import Cert3 from './certs/cert3.jpg';
import SarimLogo from './images/sarim.gif';
import {
  AboutBox,
  AboutArticle,
  AboutImg,
  AboutParagraph,
  AboutSection,
  RowArticle,
  LidlLogo,
  CasionosLogo,
  OnTracoLogo,
  WarsawLogo,
  CertImg,
  ParagraphBox
} from './styled';

export const About = () => (
  <MainContentBox>
    <h1>O nas</h1>
    <AboutBox>
      <AboutArticle>
        <AboutImg src={SLOnStage} alt="SaturdayLive na scenie" />
        <ParagraphBox>
          <AboutParagraph>
            SaturdayLive to sześcio-osobowy kolektyw tworzony przez
            utalentowanych i&nbsp;doświadczonych wykonawców. Zespół wyróżnia się
            tym, że składa się wyłącznie z&nbsp;profesjonalnych, wyksztłaconych
            muzyków, dla których muzyka to nie tylko pasja, ale również wyuczony
            zawód.
          </AboutParagraph>
          <AboutParagraph>
            Zespół powstał w&nbsp;2014 roku. Zwiedziliśmy całą Polskę,
            koncertowaliśmy również w&nbsp;Irlandii i&nbsp;Irlandii Północnej.
            Zaufały nam dziesiątki klientów - firm, agencji, oraz osób
            prywatnych.
          </AboutParagraph>
        </ParagraphBox>
      </AboutArticle>

      <AboutArticle>
        <AboutImg src={MMWedding} alt="SaturdayLive na weselu" />{' '}
        <ParagraphBox>
          <AboutParagraph>
            Zespół powstał w&nbsp;2014 roku. Zwiedziliśmy całą Polskę,
            koncertowaliśmy również w&nbsp;Irlandii i&nbsp;Irlandii Północnej.
            Zaufały nam dziesiątki klientów - firm, agencji, oraz osób
            prywatnych.
          </AboutParagraph>
          <AboutParagraph>
            Podczas imprez firmowych i wesel występowaliśmy m.in. z Kubą
            Badachem, Danzelem, Darkiem Malejonkiem. Zrealizowaliśmy wesele
            Małgorzaty i&nbsp;Radosława Majdana.
          </AboutParagraph>
        </ParagraphBox>
      </AboutArticle>
    </AboutBox>
    <h2>Doświadczenie</h2>
    <AboutBox>
      <RowArticle>
        <AboutParagraph $modified>
          Grupa była nagradzana i&nbsp;doceniana przez branżę weselną,
          otrzymując:
        </AboutParagraph>
        <ul>
          <li>
            status Partnera Honorowego Polskiego Towarzystwa Konsultanów
            Ślubnych (2019),
          </li>
          <li>
            Certyfikat Partnera Honorowego Polskiego Towarzystwa Konsultanów
            Ślubnych (2017),
          </li>
          <li>
            Certyfikat Partnera Honorowego Polskiego Towarzystwa Konsultanów
            Ślubnych (2016).
          </li>
        </ul>
        <AboutSection $wrap>
          <CertImg
            src={Cert2}
            alt="certyfikat numer 1"
            width={200}
            height={275}
          />
          <CertImg
            src={Cert3}
            alt="certyfikat numer 2"
            width={200}
            height={275}
          />
          <CertImg
            src={Cert1}
            alt="certyfikat certyfikat numer 3"
            width={200}
            height={120}
          />
        </AboutSection>
      </RowArticle>

      <RowArticle>
        <AboutParagraph $modified>Zaufali nam m. in. :</AboutParagraph>
        <AboutSection $wrap>
          <LidlLogo />
          <CasionosLogo />
          <OnTracoLogo />
          <WarsawLogo />
          <img src={SarimLogo} width={200} height={200} alt="SARIMlogo" />
        </AboutSection>
      </RowArticle>
    </AboutBox>
    <ContactBox />
  </MainContentBox>
);
