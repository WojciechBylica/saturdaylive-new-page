import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Container, Main } from './styled';

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
