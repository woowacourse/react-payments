import { createGlobalStyle } from "styled-components";

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

::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;

export default GlobalStyle;
