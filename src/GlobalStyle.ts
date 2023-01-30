import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
};

*, ::after, ::before {
  box-sizing: inherit;
};

body {
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.background};
    margin: 0 auto;
    transition: transform 0.3s;

    h1 {
  margin: 32px 16px 16px;
  font-size: 32px;
}

  h2 {
   margin: 32px 16px;
  }

  h3 {
    margin-right: 20px;
    margin-top: 0;
  }
};


`;
