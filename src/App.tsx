import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';
import CardListStore from './store';
import type { CardInformation } from './components/Common/Card/types';

function App() {
  const [cardList, setCardList] = useState<CardInformation[]>([]);

  const value = useMemo(
    () => ({
      cardList,
      dispatchCardList: (card: CardInformation) => {
        setCardList(prev => [...prev, card]);
      },
    }),
    [cardList],
  );

  return (
    <CardListStore.Provider value={value}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<CardRegistration />} />
      </Routes>
    </CardListStore.Provider>
  );
}

export default App;
