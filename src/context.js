import React from 'react';

export const CardListContext = React.createContext({
  cardList: [],
  addNewCard: () => {},
  updateNickNameByIndex: () => {},
});
