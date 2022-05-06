import React, { useState, useRef, useReducer } from 'react';

import CardFormPage from './components/CardFormPage';
import CardListPage from './components/CardListPage';
import CardSubmitPage from './components/CardSubmitPage';
import { CardInfoContext, CardInfoDispatchContext, CardListDispatchContext, PathContext } from './context';

const initialCardInfoState = {
  cardCompany: {
    name: '',
    hexColor: '#ffffff',
  },
  cardNumbers: {
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  },
  cardDate: {
    month: '',
    year: '',
  },
  owner: {
    name: '',
  },
  cardCode: {
    cvc: '',
  },
  pwd: {
    pwdNoA: '',
    pwdNoB: '',
  },
};

const cardInfoReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COMPANY':
      return {
        ...state,
        cardCompany: action.cardCompany,
      };
    case 'UPDATE_NUMBERS':
      return {
        ...state,
        cardNumbers: action.cardNumbers,
      };
    case 'UPDATE_DATE':
      return {
        ...state,
        cardDate: action.cardDate,
      };
    case 'UPDATE_OWNER':
      return {
        ...state,
        owner: action.owner,
      };
    case 'UPDATE_CARD_CODE':
      return {
        ...state,
        cardCode: action.cardCode,
      };
    case 'UPDATE_PWD':
      return {
        ...state,
        pwd: action.pwd,
      };
    case 'RESET_CARD_INFO':
      return { ...initialCardInfoState };
    default:
      return state;
  }
};

const initialCardListState = [];

const cardListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD_ITEM':
      return [...state, action.card];
    default:
      return state;
  }
};

function App() {
  const targetRef = useRef();

  const [path, setPath] = useState('list-card');

  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialCardListState);
  const [cardInfo, cardInfoDispatch] = useReducer(cardInfoReducer, initialCardInfoState);

  const checkRoutes = route => {
    switch (route) {
      case 'add-card':
        return <CardFormPage targetRef={targetRef} />;
      case 'submit-card':
        return <CardSubmitPage />;
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
            <CardInfoContext.Provider value={cardInfo}>
              {/* {checkRoutes(path)} */}
              <CardFormPage targetRef={targetRef} />
              <CardSubmitPage />
            </CardInfoContext.Provider>
          </CardListDispatchContext.Provider>
        </CardInfoDispatchContext.Provider>
      </PathContext.Provider>
    </main>
  );
}

export default App;
