import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { COLOR } from './constants/constants';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    background-color: ${COLOR.MAIN.BG};
  }

  *{
    box-sizing: border-box;
    color : ${COLOR.MAIN.GLOBAL_FONT};
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
