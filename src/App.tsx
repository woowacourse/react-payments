import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './pages/HoldingCardsPage';
import CardRegisterPage from './pages/CardRegisterPage';

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
    setCards([...cards, card]);
  };

  return (
    <Routes>
      <Route path="/" element={<HoldingCardsPage cards={cards} />} />
      <Route
        path="card-register"
        element={<CardRegisterPage registerCard={registerCard} />}
      />
    </Routes>
  );
};

export default App;
