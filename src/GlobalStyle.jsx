import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;
}

a {
  &:link { color: inherit; text-decoration: none;}
  &:visited { color: inherit; text-decoration: none;}
  &:hover { color: inherit; text-decoration: none;}
}

`;

export default GlobalStyle;
