import React, { useReducer, useState } from 'react';
import { cardInfoReducer, cardListReducer, initialCardInfoState, initialCardListState } from './reducer';

const CardInfoContext = React.createContext(null);
const CardInfoDispatchContext = React.createContext(null);
const CardInfoProvider = ({ children, initialState }) => {
  const [cardInfo, cardInfoDispatch] = useReducer(cardInfoReducer, initialState ?? initialCardInfoState);

  return (
    <CardInfoContext.Provider value={cardInfo}>
      <CardInfoDispatchContext.Provider value={cardInfoDispatch}>{children}</CardInfoDispatchContext.Provider>
    </CardInfoContext.Provider>
  );
};

const CardListContext = React.createContext(null);
const CardListDispatchContext = React.createContext(null);
const CardListProvider = ({ children, initialState }) => {
  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialState ?? initialCardListState);

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider value={cardListDispatch}>{children}</CardListDispatchContext.Provider>
    </CardListContext.Provider>
  );
};

const PathContext = React.createContext(null);
const SetPathContext = React.createContext(null);
const PathProvider = ({ children }) => {
  const [path, setPath] = useState('list-card');

  return (
    <PathContext.Provider value={path}>
      <SetPathContext.Provider value={setPath}>{children}</SetPathContext.Provider>
    </PathContext.Provider>
  );
};
export {
  CardInfoContext,
  CardInfoDispatchContext,
  CardInfoProvider,
  CardListContext,
  CardListDispatchContext,
  CardListProvider,
  PathContext,
  SetPathContext,
  PathProvider,
};
