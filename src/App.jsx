import React, { useState, useRef, useReducer } from 'react';

import CardFormPage from './components/CardFormPage';
import CardListPage from './components/CardListPage';
import CardSubmitPage from './components/CardSubmitPage';
import { CardInfoContext, CardInfoDispatchContext, CardListDispatchContext, PathContext } from './context';
import { cardInfoReducer, cardListReducer, initialCardInfoState, initialCardListState } from './reducer';

function App() {
  const targetRef = useRef();
  const nextId = useRef(1);

  const [path, setPath] = useState('list-card');

  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialCardListState);
  const [cardInfo, cardInfoDispatch] = useReducer(cardInfoReducer, initialCardInfoState);

  const checkRoutes = route => {
    switch (route) {
      case 'add-card':
        return <CardFormPage targetRef={targetRef} />;
      case 'submit-card':
        return <CardSubmitPage nextId={nextId} />;
      case 'list-card':
        return <CardListPage cardList={cardList} />;
      default:
        return `${route}는 존재하지 않는 경로입니다.`;
    }
  };

  return (
    <main className="app" ref={targetRef}>
      <PathContext.Provider value={setPath}>
        <CardInfoDispatchContext.Provider value={cardInfoDispatch}>
          <CardListDispatchContext.Provider value={cardListDispatch}>
            <CardInfoContext.Provider value={cardInfo}>{checkRoutes(path)}</CardInfoContext.Provider>
          </CardListDispatchContext.Provider>
        </CardInfoDispatchContext.Provider>
      </PathContext.Provider>
    </main>
  );
}

export default App;
