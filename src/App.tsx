import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from './types';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { data, setDataBeforeUnload } = useLocalStorage<Card>([]);
  const [cardList, setCardList] = useState<Card[]>(data);

  useEffect(() => {
    setDataBeforeUnload(cardList);
  }, [cardList, setDataBeforeUnload]);

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
