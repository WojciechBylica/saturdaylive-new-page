import React from 'react';
import { AudioPlayer, ContactBox, MainContentBox } from '../../components';
import { HomeDescription,StyledHeader, Wrapper} from './styled';

export const Home = () => {
  return (
    <MainContentBox>
      <Wrapper><MainContentBox $modified><h1>SaturdayLive - zespół muzyczny</h1></MainContentBox></Wrapper>
      <StyledHeader>
      
      </StyledHeader>
      
      
      <AudioPlayer />
      <h2>Imprezy firmowe</h2>
      <HomeDescription>
      <p>W ofercie na imprezy firmowe proponujemy Państwu zespół w&nbsp;składzie sześcioosobowym (wokalistka, wokalista,gitarzysta, klawiszowiec, basista i&nbsp;perkusista). Rozkręcimy każdą imprezę i&nbsp;rozgrzejemy każdy parkiet!!! Szeroki repertuar muzyki z lat 60-tych, 70-tych, 80-tych oraz najnowsze hity klubowe oraz radiowe za każdym razem podbijają serca nawet najbardziej wymagających gości. Mamy doświadczenie w realizacji takich imprez i potrafimy szybko&nbsp;i sprawnie współpracować&nbsp;z project menedżerami oraz ekipami nagłośnieniowymi nawet przy najbardziej napiętych planach&nbsp;i harmonogramach. Nasz kierownik muzyczny będzie do Państwa dyspozycji aby ustalić szczegóły scenariusza, elementy techniczne oraz repertuar skrojony na miarę tak, aby każdy z&nbsp;Państwa gości natychmiast ruszył do tańca. W razie potrzeby chętnie polecimy firmę dźwiękową która zna nasz rider, oraz DJ'a który mógłby uzupełnić ofertę zespołu.</p>
      </HomeDescription>

      <h2>Wesela</h2>
      <HomeDescription>
      <p>W ofercie na wesele proponujemy zespół sześcioosobowy (wokalistka, wokalista,gitarzysta, klawiszowiec, basista, perkusista). Zapewniamy również dj-a oraz obslugę przez firmę dźwiękowo-oświetleniową. Dzięki przekrojowemu repertuarowi i&nbsp;muzykom z&nbsp;najwyżej półki jesteśmy w stanie dostosować listę wykonywanych utworów do wymagań klientów o&nbsp;różnych gustach i&nbsp;upodobaniach muzycznych. Gramy koncertowo w&nbsp;45-minutowych blokach muzycznych. Nasz DJ uzupełnia występ zespołu zapewniąc delikatne tło muzyczne do kolacji, a po występie zespołu na żywo porwie najbardziej wytrwałych gości do tańca swoim tanecznym DJ-setem. Nad oprawą świetlno-dźwiękową, przez całe przyjęcie czuwa realizator dźwięku,&nbsp; Prowadzimy imprezę oraz ciekawe zabawy w&nbsp;dobrym stylu. Bez disco-polo i&nbsp;biesiady. Nasz kierownik zespołu zadba o&nbsp;każdy szczegół występu, będzie do Państwa dyspozycji w&nbsp;sprawach repertuarowych i&nbsp;w&nbsp;sprawie ustalenia szczegółów imprezy. Biegle mówimy po angielsku i&nbsp;srazie potrzeby  poprowadzić wesele również w&nbsp;tym w języku.</p>
      </HomeDescription>
      <ContactBox />
    </MainContentBox>
  );
};
