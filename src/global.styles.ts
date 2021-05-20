import { createGlobalStyle } from 'styled-components';
import PALETTE from './constants/palette';

const GlobalStyle = createGlobalStyle`
  * {
    user-select: none;
    font-family:  sans-serif;
    color: ${PALETTE.GRAY_3};
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
