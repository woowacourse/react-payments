import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CardListPage from './components/pages/CardListPage';
import CardRegistrationPage from './components/pages/CardRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import BankList from './components/BottomSheetComponents/BankList';
import CardAdditionCompletionPage from './components/pages/CardAdditionCompletionPage';
import { useBottomSheet } from './hooks/useBottomSheet';
import type { CardItemInfo } from './types/Card';

function App() {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [cardItem, setCardItem] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  });

  const { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose } =
    useBottomSheet();

  const handleChangeForm = (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => {
    const updatedCard = {
      id: Date.now(),
      cardNumber,
      expirationDate,
      name,
      bankName,
      cardName,
    };
    setCardItem(updatedCard);
  };

  useEffect(() => {
    setCardItem((prevState) => ({
      ...prevState,
      bankName,
      cardName,
    }));
  }, [bankName, cardName]);

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
                card={cardItem}
                onOpen={handleBottomSheetOpen}
                onChangeForm={handleChangeForm}
              />
            }
          />
          <Route
            path='/complete'
            element={
              <CardAdditionCompletionPage
                card={cardItem}
                cardName={cardName}
                setCardName={setCardName}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {isBottomSheetOpen && (
        <BankList
          onClose={handleBottomSheetClose}
          onBankInfoChanged={setBankName}
        />
      )}
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
