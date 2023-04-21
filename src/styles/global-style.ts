import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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

    --text-title: 600 2rem/1.9rem Roboto;
    --text-subtitle: 700 1.5rem/1.6rem Roboto;
    --text-body: 400 1.6rem/2.4rem Roboto;
    --text-caption: 500 1.2rem/1.4rem Roboto ;
  }
`;
