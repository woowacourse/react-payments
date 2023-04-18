import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #e2e2e8;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;

  font-family: 'Apple SD Gothic Neo', 'Noto Sans KR'
}

p{
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
