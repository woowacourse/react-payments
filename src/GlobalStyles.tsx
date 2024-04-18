import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  a{
    text-decoration: none;
    color: inherit;
  }

  *{
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: auto;
    min-height: 100vh;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;
