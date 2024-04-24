import styled from 'styled-components';
import MainPage from './components/MainPage/MainPage';
import GlobalStyle from './global.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 64px;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

export default App;
