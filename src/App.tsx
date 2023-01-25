import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import SaturdayLive from './saturdaylive';
import { themeLight } from './theme';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Normalize />
      <SaturdayLive />
    </ThemeProvider>
  );
}

export default App;
