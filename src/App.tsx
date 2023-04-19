import { Routes, Route } from 'react-router-dom';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';
import { useState } from 'react';
import { Card } from './types';

function App() {
  const [cardList, setCardList] = useState<Card[]>([]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CardListPage cardList={cardList} />} />
        <Route path="/add-card" element={<CardAddPage addCard={setCardList} />} />
      </Routes>
    </div>
  );
}

export default App;
