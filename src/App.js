import React, { useEffect, useState } from 'react';
import { DEFAULT_CARD_INFO, DEFAULT_ROUTE_INFO, PAGE } from './constants';
import { CardContext, PageContext } from './context';
import CardListPage from './components/Pages/CardListPage';
import CompleteAddCardPage from './components/Pages/CompleteAddCardPage';
import AddCardPage from './components/Pages/AddCardPage';

function App() {
  const [cardList, setCardList] = useState({});
  const [page, setPage] = useState(PAGE.ADD_CARD);
  const [tempRouter, setTempRouter] = useState(DEFAULT_ROUTE_INFO);
  const [cardInput, setCardInput] = useState(DEFAULT_CARD_INFO);

  const cardState = {
    cardList: cardList,
    setCardList: setCardList,
    cardInput: cardInput,
    setCardInput: setCardInput,
  };

  const pageState = {
    page: page,
    setPage: setPage,
    tempRouter: tempRouter,
  };

  useEffect(() => {
    if (page === PAGE.ADD_CARD) {
      setTempRouter({ addCard: 'app', completeAddCard: 'app hide', cardList: 'app hide' });
    }
    if (page === PAGE.COMPLETE_ADD_CARD) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app', cardList: 'app hide' });
    }
    if (page === PAGE.CARD_LIST) {
      setTempRouter({ addCard: 'app hide', completeAddCard: 'app hide', cardList: 'app' });
    }
  }, [page]);

  return (
    <div className="root">
      <PageContext.Provider value={pageState}>
        <CardContext.Provider value={cardState}>
          <AddCardPage />
          <CompleteAddCardPage />
          <CardListPage />
        </CardContext.Provider>
      </PageContext.Provider>
    </div>
  );
}

export default App;