import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { CardListProvider } from './context/CardListContext';

import CardListPage from './pages/CardListPage';
import AddCardPage from './pages/AddCardPage';
import AddCardResultPage from './pages/AddCardResultPage';
import UpdateCardNickNamePage from './pages/UpdateCardNickNamePage';
import WrongAccessPage from './pages/WrongAccessPage';

const AppContainer = styled.div`
  width: 375px;
  height: 700px;
  margin: 50px auto;
  padding: 20px 28px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`;

function App() {
  return (
    <AppContainer>
      <CardListProvider>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/addCardResult/:id" element={<AddCardResultPage />} />
          <Route path="/updateCardNickName/:id" element={<UpdateCardNickNamePage />} />
          <Route path="/error" element={<WrongAccessPage />} />
          <Route path="*" element={<WrongAccessPage />} />
        </Routes>
      </CardListProvider>
    </AppContainer>
  );
}

export default App;
