import styled from 'styled-components';
import './App.css';
import MainPage from './components/MainPage/MainPage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

export default App;
