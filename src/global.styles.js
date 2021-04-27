import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    background-color: #F7F9FA;
  }

  *{
    box-sizing: border-box;
    color : #525252;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
