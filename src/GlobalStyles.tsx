import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif,"Roboto";
    line-height: 1.5;
    padding:0;
    margin:0;
  }

  #modal-root {
  position: relative;
  z-index: 999;
}


`;

export default GlobalStyle;
