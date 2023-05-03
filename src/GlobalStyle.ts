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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  body:has(.modal) {
    overflow: hidden;
  }

  /* Colors *****************************************/
  :root {
    --input-background:#ecebf1;
    --label-color: #525252;
    --white-color: #fefefe;
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

  #got-lost {
    text-align: center;

    & h2 {
      font-size: 24px;
      font-weight: 700;
      margin: 100px 0 46px;
    }

    & a {
      display: inherit;
      width: calc(100% - 64px);
      padding: 14px 50px;
      margin: 0 32px;
      line-height: 1.6;
      color: var(--white-color);
      border-radius: 20px;
      word-break: keep-all;
      text-decoration: none;
      background: #c9b7e5;
    }
  }
`;
