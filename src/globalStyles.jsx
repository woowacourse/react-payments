import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto', sans-serif;
  src: url('./assets/fonts/Roboto-Black.ttf'), 
  url('./assets/fonts/Roboto-Bold.ttf'),
  url('./assets/fonts/Roboto-Light.ttf'),
  url('./assets/fonts/Roboto-Medium.ttf'),
  url('./assets/fonts/Roboto-Regular.ttf'),
  url('./assets/fonts/Roboto-Thin.ttf'),
}

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

.App {
  width: 375px;
  min-height: 700px;
  margin: 50px auto;
  padding: 20px 28px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
}
`;

export default GlobalStyle;
