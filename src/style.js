import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FlexCenter } from './utils/style/FlexCenter';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled(FlexCenter)`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  background-color: #292929;
`;

export { Container, GlobalStyle };
