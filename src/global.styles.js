import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-style: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyles;
