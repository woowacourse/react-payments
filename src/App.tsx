import styled from 'styled-components';
import GlobalStyle from './global.styled';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 64px;
  box-sizing: border-box;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
