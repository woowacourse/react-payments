import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { COLOR } from './constants/style';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    background-color: ${COLOR.MAIN.BG};
  }
  
  html, body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    color : ${COLOR.MAIN.GLOBAL_FONT};
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
