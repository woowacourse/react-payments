import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HoldingCardsPage from './HoldingCardsPage';
import CardRegisterPage from './CardRegisterPage';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsData = localStorage.getItem('cards');

    if (cardsData === null) return;

    setCards(JSON.parse(cardsData));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HoldingCardsPage />} />
      <Route path="card-register" element={<CardRegisterPage />} />
    </Routes>
  );
}

export default App;
