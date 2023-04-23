import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 

  ${reset}
	* {
			box-sizing: border-box;
	}

	body {
		padding: 28px 24px;
		font-family: "Roboto", sans-serif;
  }

  a {
      text-decoration: none;
      color: inherit;
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
