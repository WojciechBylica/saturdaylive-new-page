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
    background: rgb(51,51,51);
    background: linear-gradient(90deg,
      rgba(51,51,51,1) 0%,
      rgba(51,51,51,1) 15%,
      rgba(51,51,51,0.8) 45%,
      rgba(255,215,0,1) 82%,
      rgba(51,51,51,1) 100%);
    margin: 0 auto;
    transition: transform 0.3s;

    h1 {
      color: ${({ theme }) => theme.color.secondary};
      margin: 32px 16px 16px;
      font-size: 32px;
    }

    h2 {
      color: ${({ theme }) => theme.color.secondary};
      margin: 32px 16px;
    }

    h3 {
      margin-right: 20px;
      margin-top: 0;
    }
  };
`;
