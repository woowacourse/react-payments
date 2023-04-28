import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
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
  
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  html,
  body {
    font-family: sans-serif;
    width: 375px;
    margin: 0 auto;
  }
  
`;

export default GlobalStyle;
