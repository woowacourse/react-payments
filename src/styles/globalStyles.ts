import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
    display: flex;
    justify-content: center;
    }

    body[data-hide-scroll='true'] {
    overflow: hidden;
    }

    .app {
    width: 375px;
    min-height: 100vh;
    background-color: #fff;
    }
`;

export default GlobalStyle;
