import React from 'react';

export const CardInfoListContext = React.createContext({
  cardList: [],
  addNewCard: () => {},
  updateNickNameByIndex: () => {},
});
