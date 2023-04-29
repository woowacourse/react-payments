import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  body{
    margin:0 auto;
    max-width: 600px;
    height:100%;
  }
  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
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

  .App {
    padding:28px 24px;
  }

  .overflowHidden {
    overflow: hidden;
  };
`;

export default GlobalStyles;
