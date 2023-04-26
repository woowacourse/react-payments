import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLOR } from './constants/cardInfo';

const GlobalStyles = createGlobalStyle` 
  ${reset}
	* {
			box-sizing: border-box;
	}

	body {
		width: 100vw;
		height: 100vh;

		font-family: "Roboto", sans-serif;

		background-color: ${COLOR.GREY200};
  }

	#root {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
	}

	.App {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		padding: 28px 24px;

		background-color: ${COLOR.WHITE};
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

	@media (min-width: 992px) {
		.App {
			width: 50%;
		}
	}

	@media (min-width: 1200px) {
		.App {
			width: 30%;
		}
	}
`;

export default GlobalStyles;
