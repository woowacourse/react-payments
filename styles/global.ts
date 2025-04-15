import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../fonts/NotoSansKR-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  #root {
    font-family : "NotoSansKR"
  }  
  @font-face {
        font-family: 'NotoSansKR';
        src: local('NotoSansKR');
        font-style: normal;
        src: url(${NotoSansKR}) format('truetype');
  }
  `;

export default GlobalStyle;
