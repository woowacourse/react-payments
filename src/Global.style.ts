import { createGlobalStyle } from 'styled-components';
import './reset.css';
import STYLE from './constants/style';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${STYLE.FONT_SIZE.default};
  font-weight: ${STYLE.BOLD.default};
}
`;

export default GlobalStyle;
