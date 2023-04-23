import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './pages/HoldingCardsPage';
import CardRegisterPage from './pages/CardRegisterPage';

import { ModalProvider } from './components/common/Modal/ModalContext';

import { CARDS_LOCAL_STORAGE_KEY } from './domain/constants';
import type { CardInfo } from './domain/types/card';

const App = () => {
  const [cards, setCards] = useState<CardInfo[]>(() => {
    const localStorageData = localStorage.getItem(CARDS_LOCAL_STORAGE_KEY);

    if (localStorageData === null) return [];

    return JSON.parse(localStorageData);
  });

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(CARDS_LOCAL_STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  const registerCard = (card: CardInfo) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HoldingCardsPage cards={cards} />} />
        <Route
          path="card-register"
          element={<CardRegisterPage registerCard={registerCard} />}
        />
      </Routes>
    </ModalProvider>
  );
};

export default App;
