import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    color: #333;
    background-color: #fff;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;
