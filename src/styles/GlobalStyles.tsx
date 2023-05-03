import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif ,"Helvetica", "Arial", sans-serif,"Roboto";
    line-height: 1.5;
    padding:0;
    margin:0;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  body::-webkit-scrollbar {
    /* hidden scroll */
    display: none;
  }
  /* Colors *****************************************/
  :root {
    --input-background:#ecebf1;
    --label-color: #525252;
    --gray-color-200: #BABABA;
    --gray-color-300: #969696;
    --gray-color-400: #727272;
    --caption-color: #ee3507;
    --darken-color: #333;
    --bc-card: #F04652;
    --shinhan-card: #0046FF;
    --kakao-bank: #FFE600;
    --hyundai-card: #333;
    --woori-card: #027BC8;
    --lottee-card: #ED1C23;
    --hana-card: #009490;
    --kookmin-card: #6F655B;
  }


  #modal-root {
  position: relative;
  z-index: 999;

  
}


`;

export default GlobalStyle;
