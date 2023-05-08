import { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';

const GlobalStyle = createGlobalStyle<PropsWithChildren>`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #F5F5F5;
  }

  #root {
    width: 375px;
    height: 700px;
    margin: 0 auto;
    background-color: white;
  }

  @media (max-width: 500px) {
    #root {
      width: 100vw;
      min-height: -webkit-fill-available;
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input {
    border: none;
    background: transparent;
  }
`;

export default GlobalStyle;
