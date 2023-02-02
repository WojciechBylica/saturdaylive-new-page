import React, { useState } from 'react';

import { ContactBox, MainContentBox } from '../../components';
import {
  HomeDescription,
  StyledHeader,
  Wrapper,
  MainHeader,
  MainDescription,
  DescriptionWrapper,
  StopIcon,
  StopButton
} from './styled';
import { YoutubePlayerMain } from './YoutubePlayer';

export const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  console.log(navigator);
  return (
    <>
      <Wrapper>
        <MainContentBox $modified onClick={() => setShowVideo(false)}>
          <MainHeader>SaturdayLive</MainHeader>
          <MainDescription>
            Zespół muzyczny z Warszawy specjalizujący się w&nbsp;muzyce
            tanecznej, radiowych hitach i klubowych przebojach.
          </MainDescription>
          {showVideo && hasLoaded && (
            <StopButton onClick={() => setShowVideo(false)}>
              <StopIcon />
            </StopButton>
          )}
        </MainContentBox>
      </Wrapper>
      <StyledHeader>
        <YoutubePlayerMain
          label={"You're Simply The Best"}
          videoId={'TjefJuUJi7g'}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          hasLoaded={hasLoaded}
          setHasLoaded={setHasLoaded}
        />
      </StyledHeader>
      <MainContentBox>
        <h1>SaturdayLive</h1>
        <HomeDescription>
          <DescriptionWrapper>
            <p style={{ maxWidth: '700px', margin: '16px', lineHeight: 2 }}>
              <b>SaturdayLive - zespół muzyczny</b> z&nbsp;Warszawy
              specjalizujący się w&nbsp;muzyce tanecznej, radiowych hitach,
              i&nbsp;klubowych przebojach. SaturdayLive od wielu lat uświetnia
              swoimi wykonaniami <b>imprezy firmowe</b>, <b>wesela</b>, oraz{' '}
              <b>imprezy plenerowe</b>. Współpracujemy z&nbsp;agencjami
              eventowymi, agencjami ślubnymi, wedding planerami, oraz osobami
              prywatnymi. Jeśli szukasz dobrej muzyki, dobrej zabawy przy
              muzyce, wyrazistego zespołu z&nbsp;dobrą prezencją i świetnym
              brzmieniem zapraszamy do współpracy.
            </p>
          </DescriptionWrapper>
        </HomeDescription>

        <h2>Oferta</h2>

        <HomeDescription>
          <DescriptionWrapper>
            <h3>Imprezy firmowe</h3>
            <p>
              W ofercie na imprezy firmowe proponujemy Państwu zespół
              w&nbsp;składzie sześcioosobowym (wokalistka, wokalista,gitarzysta,
              klawiszowiec, basista i&nbsp;perkusista). Rozkręcimy każdą imprezę
              i&nbsp;rozgrzejemy każdy parkiet!!!
            </p>
            <p>
              Szeroki repertuar muzyki z lat 60-tych, 70-tych, 80-tych oraz
              najnowsze hity klubowe oraz radiowe za każdym razem podbijają
              serca nawet najbardziej wymagających gości. Mamy doświadczenie w
              realizacji takich imprez i&nbsp;potrafimy szybko i&nbsp;sprawnie
              współpracować z&nbsp;project menedżerami, oraz ekipami
              nagłośnieniowymi nawet przy najbardziej napiętych planach&nbsp;i
              harmonogramach. Nasz kierownik muzyczny będzie do Państwa
              dyspozycji aby ustalić szczegóły scenariusza, elementy techniczne
              oraz repertuar skrojony na miarę tak, aby każdy z&nbsp;Państwa
              gości natychmiast ruszył do tańca.
            </p>
            <p>
              W razie potrzeby chętnie polecimy firmę dźwiękową która zna nasz
              rider, oraz DJ'a który mógłby uzupełnić ofertę zespołu.
            </p>
          </DescriptionWrapper>
        </HomeDescription>

        <HomeDescription>
          <DescriptionWrapper>
            <h3>Przyjęcia weselne</h3>
            <p>
              W ofercie na wesele proponujemy zespół sześcioosobowy (wokalistka,
              wokalista,gitarzysta, klawiszowiec, basista, perkusista).
              Zapewniamy również dj-a oraz obslugę przez firmę
              dźwiękowo-oświetleniową. Dzięki przekrojowemu repertuarowi
              i&nbsp;muzykom z&nbsp;najwyżej półki jesteśmy w stanie dostosować
              listę wykonywanych utworów do wymagań klientów o&nbsp;różnych
              gustach i&nbsp;upodobaniach muzycznych.
            </p>
            <p>
              Gramy koncertowo w&nbsp;45-minutowych blokach muzycznych. Nasz DJ
              uzupełnia występ zespołu zapewniąc delikatne tło muzyczne do
              kolacji, a&nbsp;po występie zespołu na żywo porwie najbardziej
              wytrwałych gości do tańca swoim tanecznym DJ-setem. Nad oprawą
              świetlno-dźwiękową, przez całe przyjęcie czuwa realizator
              dźwięku,&nbsp;
            </p>
            <p>
              Prowadzimy imprezę oraz ciekawe zabawy w&nbsp;dobrym stylu. Bez
              disco-polo i&nbsp;biesiady. Nasz kierownik zespołu zadba
              o&nbsp;każdy szczegół występu, będzie do Państwa dyspozycji
              w&nbsp;sprawach repertuarowych i&nbsp;w&nbsp;sprawie ustalenia
              szczegółów imprezy.
            </p>
            <p>
              Biegle mówimy po angielsku i&nbsp;w&nbsp;razie potrzeby
              poprowadzić wesele również w&nbsp;tym w języku.
            </p>
          </DescriptionWrapper>
        </HomeDescription>
        <ContactBox />
      </MainContentBox>
    </>
  );
};
