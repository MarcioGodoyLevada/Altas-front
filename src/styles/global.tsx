import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray500};
    background: ${theme.colors.gray50};
  }

  p {
      font-size: 1.6rem;
      line-height: 1.3;
    }
`;

export default GlobalStyle;
