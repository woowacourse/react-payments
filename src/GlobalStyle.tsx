import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white-color:#ffffff;
    --blue-grey-color:#ecebf1;
    --light-grey-color:#e5e5e5;
    --grey-color:#737373;
    --dark-grey-color:#525252;
    --black-color:#333333;
    --yellow-color:#cbba64;
    --red-color:#ec2f1b;
    --shadow-color:rgba(0, 0, 0, 0.25);
  }

body {
  background-color: var(--blue-grey-color);
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
