import React, { useReducer } from 'react';

const CardListContext = React.createContext(null);
const CardListDispatchContext = React.createContext(null);

const initialCardListState = [];
const cardListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD_ITEM':
      return [...state, action.card];
    default:
      return state;
  }
};

const CardListProvider = ({ children, initialState }) => {
  const [cardList, cardListDispatch] = useReducer(cardListReducer, initialState ?? initialCardListState);

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider value={cardListDispatch}>{children}</CardListDispatchContext.Provider>
    </CardListContext.Provider>
  );
};

export { CardListContext, CardListDispatchContext, CardListProvider };
