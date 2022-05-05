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




.App {
  width: 375px;
  height: 700px;
  margin: 50px auto;
  padding: 20px 28px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
}
`;

export default GlobalStyle;
