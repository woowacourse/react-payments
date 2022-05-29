import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    text-decoration: none;

    &:active {
      color: unset;
    }
  }

  #root {
    display: flex;
    background-color: #fff;
    width: 100vw;
    min-width: 375px;
    height: 100vh;
    min-height: 660px;
    position: relative;
    border-radius: 15px;
    justify-content: center;
  }
`}`;

export default GlobalStyle;
