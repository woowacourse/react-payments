import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './HoldingCardsPage';
import CardRegisterPage from './CardRegisterPage';

import Layout from '../components/common/Layout';
import type { CardData } from '../types/card';
import CardNameRegisterPage from './CardNameRegisterPage';
import CardFormProvider from '../contexts/CardFormContext';

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
    <CardFormProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HoldingCardsPage cards={cards} />} />
          <Route
            path="card-register"
            element={<CardRegisterPage />}
          />
          <Route path="card-name-register" element={<CardNameRegisterPage registerCard={registerCard}  />} />
        </Route>
      </Routes>
    </CardFormProvider>
  );
}

export default App;
