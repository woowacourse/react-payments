import { createGlobalStyle } from 'styled-components';
import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
`;

export default GlobalStyle;
