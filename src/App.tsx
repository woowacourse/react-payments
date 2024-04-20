import styled from 'styled-components';
import GlobalStyle from './Global.style';
import MainPage from './components/MainPage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
