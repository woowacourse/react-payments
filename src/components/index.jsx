import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCardList } from '../hooks/useCardList';
import Landing from '../pages';
import CardList from '../pages/cardlist';
import AddCard from '../pages/cardlist/add';
import EditCard from '../pages/cardlist/edit';
import CardSuccess from '../pages/cardlist/success';
import NotFound from '../pages/404';
import { ROUTE } from '../route';
function App() {
  const [cardList, cardListDispatch] = useCardList();

  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.home.route} element={<Landing />} />
          <Route
            path={ROUTE.addCard.route}
            element={<AddCard cardListDispatch={cardListDispatch} />}
          />
          <Route
            path={ROUTE.cardSuccess.route}
            element={<CardSuccess cardList={cardList} cardListDispatch={cardListDispatch} />}
          />
          <Route
            path={ROUTE.editCard.route}
            element={<EditCard cardList={cardList} cardListDispatch={cardListDispatch} />}
          />
          <Route path={ROUTE.cardList.route} element={<CardList cardList={cardList} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
