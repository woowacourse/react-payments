import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;  
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html,
  body {
    color: var(--grey-700);
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

  :root {
    --primary-color: #75c4d2;
    --lighten-color: #cddfe3;
    --grey-100: #ffffff;
    --grey-200: #ecebf1;
    --grey-300: #e5e5e5;
    --grey-400: #c6c6c6;
    --grey-500: #aeadb0;
    --grey-600: #575757;
    --grey-700: #3a3a3a;
    --grey-800: #000000;
    --red-100: #ff0000;
    --red-200: #db5959;
    --orange-100: #ffa759;
    --yellow-100: #cbba64;
    --green-100: #8aba19;
  }
`;

export default GlobalStyle;
