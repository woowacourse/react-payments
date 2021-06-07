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

const Button = styled.button`
  color: black;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  height: 100%;
  display: flex;
  margin-left: 0.8rem;
  align-items: center;
  text-align: center;
`;

export { Container, GlobalStyle, Button, Title };
