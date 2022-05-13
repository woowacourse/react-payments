import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardListContext, CardIndexContext } from 'contexts';

import AddCardPage from 'components/Page/AddCard/AddCardPage';
import AddCardResultPage from 'components/Page/AddCardResult/AddCardResult';
import CardListPage from 'components/Page/CardList/CardListPage';

const App = () => {
  const [cardList, setCardList] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <main>
      <CardListContext.Provider value={{ cardList, setCardList }}>
        <CardIndexContext.Provider value={{ cardIndex, setCardIndex }}>
          <Routes>
            <Route path="/react-payments/" element={<AddCardPage />} />
            <Route path="/react-payments/result" element={<AddCardResultPage />} />
            <Route path="/react-payments/list" element={<CardListPage />} />
          </Routes>
        </CardIndexContext.Provider>
      </CardListContext.Provider>
    </main>
  );
};

export default App;
