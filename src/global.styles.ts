import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;900&display=swap');

  * {
    user-select: none;
    font-family: 'Noto Sans KR', sans-serif;
    color: #333333;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
