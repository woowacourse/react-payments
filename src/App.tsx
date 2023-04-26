import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CardListPage from './components/pages/CardListPage';
import CardRegistrationPage from './components/pages/CardRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import BankList from './components/BottomSheetComponents/BankList';
import CardAdditionCompletionPage from './components/pages/CardAdditionCompletionPage';
import { useBottomSheet } from './hooks/useBottomSheet';
import { cardLocalStorage } from './components/domain/CardLocalStorage';
import type { CardItemInfo } from './types/Card';

function App() {
  const [cardList, setCardList] = useState<CardItemInfo[]>(
    cardLocalStorage.getCardList()
  );
  const [bankName, setBankName] = useState('카드사를 선택해주세요');

  const { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose } =
    useBottomSheet();

  const onBankInfoChanged = (bankName: string) => {
    setBankName(bankName);
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
                bankName={bankName}
              />
            }
          />
          <Route
            path='/complete'
            element={<CardAdditionCompletionPage cardList={cardList} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {isBottomSheetOpen && (
        <BankList
          onClose={handleBottomSheetClose}
          onBankInfoChanged={onBankInfoChanged}
        />
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
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
