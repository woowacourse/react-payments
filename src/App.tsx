import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CardListPage from './components/pages/CardListPage';
import CardRegistrationPage from './components/pages/CardRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import BankList from './components/BottomSheetComponents/BankList';
import CardAdditionCompletionPage from './components/pages/CardAdditionCompletionPage';
import { useBottomSheet } from './hooks/useBottomSheet';
import { useChangeForm } from './hooks/useChangeForm';
import { CardContext } from './context/CardContext';
import type { CardItemInfo } from './types/Card';

function App() {
  const { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose } =
    useBottomSheet();
  const { handleChangeForm } = useChangeForm();

  const { setCardList } = useContext(CardContext);

  const updateCardList = (cardItem: CardItemInfo) => {
    setCardList((prevCardList) => [cardItem, ...prevCardList]);
  };

  return (
    <AppContainer className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path='/'
            element={<CardListPage onOpen={handleBottomSheetOpen} />}
          />
          <Route
            path='/register'
            element={
              <CardRegistrationPage
                onOpen={handleBottomSheetOpen}
                onChangeForm={handleChangeForm}
              />
            }
          />
          <Route
            path='/complete'
            element={
              <CardAdditionCompletionPage onUpdateCardList={updateCardList} />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {isBottomSheetOpen && <BankList onClose={handleBottomSheetClose} />}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--white-color);

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

export default App;
