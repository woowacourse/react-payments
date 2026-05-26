import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCardPage from './components/AddCardPage/AddCardPage';
import CompletePage from './components/completePage/CompletePage';
import styled from '@emotion/styled';
import { CardListPage } from './components/CardListPage/CardListPage';

function App() {
  return (
    <AppWrapper>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

export default App;
