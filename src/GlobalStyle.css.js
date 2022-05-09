import { createGlobalStyle } from 'styled-components';
import { CARD_COMPANY_COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  :root {
    ${CARD_COMPANY_COLORS.POCO_CARD_COMPANY}: #E24141;
    ${CARD_COMPANY_COLORS.JUNE_CARD_COMPANY}: #547CE4;
    ${CARD_COMPANY_COLORS.GONGONE_CARD_COMPANY}: #73BC6D;
    ${CARD_COMPANY_COLORS.BRAN_CARD_COMPANY}: #DE59B9;
    ${CARD_COMPANY_COLORS.ROID_CARD_COMPANY}: #04C09E;
    ${CARD_COMPANY_COLORS.DOBI_CARD_COMPANY}: #E76E9A;
    ${CARD_COMPANY_COLORS.COLEN_CARD_COMPANY}: #F37D3B;
    ${CARD_COMPANY_COLORS.SUN_CARD_COMPANY}: #FBCD58;
    ${CARD_COMPANY_COLORS.UNSELECTED_COMPANY}: #737373;

    --button-font-color: #fff;
    --disabled-button-background-color: #e5e5e5;
    --flex-background-color: #ecebf1;
    --input-background-color: #ecebf1;
    --input-border-color: #9ca3af;
    --small-text-color: #525252;
    --text-color: #e24141;
    --tip-button-background-color: #ffffff;
    --tip-button-border-color: #bababa;
    --tip-button-text-color: #969696;
    --card-company-text-color: #000000;
    --selected-card-company-text-color: #5e5e5e;
    --card-chip-background-color: #CBBA64;
    --dimmer-background-color: rgba(0, 0, 0, 0.5);
    --toast-background-color: #fff;
    --card-alias-color: #383838;
    --card-alias-bold-color: #575757;
    --add-button-background-color: #e5e5e5;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

