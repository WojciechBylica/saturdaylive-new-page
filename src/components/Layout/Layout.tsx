import React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Container, Main } from './styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};
