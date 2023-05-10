import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    ul,
    li {
        list-style: none;
    }
    button, input {
        all:unset;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
