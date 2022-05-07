import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #e5e5e5;
    display: flex;
    font-family: 'Roboto', 'Malgun Gothic';
    justify-content: center;
  }

  input:invalid {
    border-color: red;
  }

  #modal {
    position: absolute;
  }

  #root {
    background: #fff;
    box-sizing: border-box;
    padding: 30px;
    width: 400px;
    min-height: 757px;
  }
  
  `;

export default GlobalStyle;
