import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './HoldingCardsPage';
import CardInfoRegisterPage from './CardInfoRegisterPage';
import CardNameRegisterPage from './CardNameRegisterPage';
import CardPage from './contexts/CardForm';

import Layout from '../components/common/Layout';
import type { CardData } from '../types/card';

function App() {
  const [cards, setCards] = useState<CardData[]>([]);

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

  const registerCard = (card: CardData) => {
    setCards([...cards, card]);
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HoldingCardsPage cards={cards} />} />
        <Route element={<CardPage />}>
          <Route path="card-info-register" element={<CardInfoRegisterPage />} />
          <Route
            path="card-name-register"
            element={<CardNameRegisterPage registerCard={registerCard} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
