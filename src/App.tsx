import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './pages/HoldingCardsPage';
import CardRegisterPage from './pages/CardRegisterPage';

import type { CardInfo } from './types/card';

const App = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    const cardsData = localStorage.getItem('cards');

    if (cardsData === null) return;

    setCards(JSON.parse(cardsData));
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(cards));
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
