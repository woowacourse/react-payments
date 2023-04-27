import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    ul,
    li {
        list-style: none;
    }
    html,
    body {
        width: 375px;
        margin: 0 auto;
        font-family: sans-serif;
        font-size: 16px;
    }

    button, input {
        all:unset;
    }
}`;

export default GlobalStyle;
