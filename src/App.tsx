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
import { cardLocalStorage } from './components/domain/CardLocalStorage';

function App() {
  const { isBottomSheetOpen, handleBottomSheetOpen, handleBottomSheetClose } =
    useBottomSheet();

  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [cardList, setCardList] = useState<CardItemInfo[]>(
    cardLocalStorage.getCardList() || []
  );
  const [card, setCard] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  });

  const updateCardList = (cardItem: CardItemInfo) => {
    setCardList((prevCardList) => [...prevCardList, cardItem]);
  };

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
    setCard(updatedCard);
  };

  useEffect(() => {
    setCard((prevState) => ({
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
            element={
              <CardListPage
                cardList={cardList}
                onOpen={handleBottomSheetOpen}
              />
            }
          />
          <Route
            path='/register'
            element={
              <CardRegistrationPage
                card={card}
                onOpen={handleBottomSheetOpen}
                onChangeForm={handleChangeForm}
              />
            }
          />
          <Route
            path='/complete'
            element={
              <CardAdditionCompletionPage
                card={card}
                cardName={cardName}
                setCardName={setCardName}
                onUpdateCardList={updateCardList}
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
