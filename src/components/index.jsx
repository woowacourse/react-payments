import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AddCard from '../pages/AddCard';
import CardList from '../pages/CardList';
import NotFound from '../pages/NotFound';
import AddCardSuccess from '../pages/AddCard/success';
import { useCardList } from '../hooks/useCardList';

function App() {
  const [cardList, cardListDispatch] = useCardList();

  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/add" element={<AddCard cardListDispatch={cardListDispatch} />} />
          <Route
            path="/add/success"
            element={<AddCardSuccess cardList={cardList} cardListDispatch={cardListDispatch} />}
          />
          <Route path="/list" element={<CardList cardList={cardList} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
