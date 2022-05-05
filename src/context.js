import React from 'react';

export const CardInfoListContext = React.createContext({
  cardInfoList: [],
  addNewCard: () => {},
  updateNickNameByIndex: () => {},
});
