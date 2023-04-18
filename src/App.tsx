import CardListPage from './components/pages/CardListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CardRegistrationPage from './components/pages/CardRegistrationPage';

function App() {
  return (
    <AppContainer className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardListPage />} />
          <Route path='/register' element={<CardRegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

export default App;
