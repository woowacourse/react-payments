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

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;

export default GlobalStyles;
