import React, { useReducer } from 'react';
import { cardInfoReducer, cardListReducer, initialCardInfoState, initialCardListState } from './reducer';

const CardInfoContext = React.createContext(null);
const CardInfoDispatchContext = React.createContext(null);
const CardInfoProvider = ({ children }) => {
  const [cardInfo, cardInfoDispatch] = useReducer(cardInfoReducer, initialCardInfoState);

  return (
    <CardInfoContext.Provider value={cardInfo}>
      <CardInfoDispatchContext.Provider value={cardInfoDispatch}>{children}</CardInfoDispatchContext.Provider>
    </CardInfoContext.Provider>
  );
};

const CardListContext = React.createContext(null);
const CardListDispatchContext = React.createContext(null);
const CardListProvider = ({ children }) => {
  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialCardListState);

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider value={cardListDispatch}>{children}</CardListDispatchContext.Provider>
    </CardListContext.Provider>
  );
};

const SetPathContext = React.createContext(null);

export {
  CardInfoContext,
  CardInfoDispatchContext,
  CardInfoProvider,
  CardListContext,
  CardListDispatchContext,
  CardListProvider,
  SetPathContext,
};
