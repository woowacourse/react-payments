import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border:none
  }
  
  ul,
  li {
    list-style: none;
  }
  
  html,
  body {
    font-family: sans-serif;
    font-size: 62.5%;
  }
  
  /* Colors *****************************************/
  :root {
    --grey-100: #ECEBF1;
    --grey-200: #E5E5E5;
    --grey-300: #525252;
    --black: #333333;
    --yellow: #CBBA64;

    --text-title: 600 20px/24px san-serif;
    --text-subtitle: 600 18px/28px san-serif;
    --text-body: 400 16px/24px san-serif;
    --text-caption: 500 12px/14px Roboto ;
  }
`;
