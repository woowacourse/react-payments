import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }
    ul,
    li {
        list-style: none;
    }
    html,
    body {
        font-family: sans-serif;
        font-size: 16px;
    }

    button {
        all:unset;
    }
}`;
