import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;  
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    scrollbar-width: none; /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Edge, Opera, Safari*/
  }

  body {
    background-color: white;
  }

  body:has(dialog[open]) {
    overflow: hidden;
  }
`;

export default GlobalStyle;
