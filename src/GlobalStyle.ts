import { createGlobalStyle } from "styled-components";
import "../src/css/reset.css";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif !important;
  }
  
  html,
  body {
    /* hidden scroll */
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    /* hidden scroll */
    display: none;
  }

  body:has(.modal) {
    overflow: hidden;
  }

  /* Colors *****************************************/
  :root {
    --input-background:#ecebf1;
    --label-color: #525252;
    --gray-color-100: #e5e5e5;
    --gray-color-200: #BABABA;
    --gray-color-300: #969696;
    --gray-color-400: #727272;
    --caption-color: #ee3507;
    --darken-color: #333;
  }

  #root {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .label-text {
    color: var(--label-color);
    font-size: 12px;
    font-weight: 500;
  }
`;
