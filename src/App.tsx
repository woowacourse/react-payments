import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card, CardContext } from './context/CardContext';
import AddCardPage from './pages/AddCardPage';

import MyCardPage from './pages/MyCardPage';
import { getLocalStorage } from './utils/localStorage';

function App() {
  const [cardList, setCardList] = useState(getLocalStorage<Card[]>('cardList', []));

  return (
    <CardContext.Provider value={{ cardList, setCardList }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<MyCardPage />} />
          <Route path="addCard" element={<AddCardPage />} />
        </Routes>
      </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;
