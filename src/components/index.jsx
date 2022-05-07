import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardResultPage from './Page/AddCardResult/AddCardResult';
import AddCardPage from './Page/AddCard/AddCardPage';
import CardListPage from './Page/CardList/CardListPage';

import { CardListContext, CardIndexContext } from '../contexts';

const CardApp = () => {
  const [cardList, setCardList] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <CardListContext.Provider value={{ cardList, setCardList }}>
      <CardIndexContext.Provider value={{ cardIndex, setCardIndex }}>
        <Routes>
          <Route path="/react-payments/" element={<AddCardPage />} />
          <Route path="/react-payments/result" element={<AddCardResultPage />} />
          <Route path="/react-payments/list" element={<CardListPage />} />
        </Routes>
      </CardIndexContext.Provider>
    </CardListContext.Provider>
  );
};

export default CardApp;
