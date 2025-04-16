import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../fonts/NotoSansKR-VariableFont_wght.ttf';
import Inter from '../fonts/Inter-VariableFont_opsz,wght.ttf';

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

  @font-face {
        font-family: 'Inter';
        src: local('Inter');
        font-style: normal;
        src: url(${Inter}) format('truetype');
  }
  `;

export default GlobalStyle;
