import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif,"Roboto";
    line-height: 1.5;
    padding:0;
    margin:0;
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


  .bc-card {
    background:var(--bc-card);
    color:white;
  }
    
  .shinhan-card {
    background:var(--shinhan-card);
    color:white;
  }
      
  .kakao-bank {
    background:var(--kakao-bank);
    color: #282828;
  }
    
  .hyundai-card {
    background:var(--hyundai-card);
    color:white;
  }
      
  .woori-card {
    background:var(--woori-card);
    color:white;
  }
      
  .lottee-card {
    background:var(--lottee-card);
    color:white;
  }
      
  .hana-card {
    background:var(--hana-card);
    color:white;
  }
      
  .kookmin-card {
    background:var(--kookmin-card);
    color:white;
  }
      



  #modal-root {
  position: relative;
  z-index: 999;

  
}


`;

export default GlobalStyle;
