import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
`;

const Page = styled.div`
  position: relative;
  width: 25.9rem;
  height: 46rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
`;

const Header = styled.div`
  width: 96%;
  height: 8%;
  margin: 2% 2% 6% 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export { Container, GlobalStyle, Page, Header, Body };
