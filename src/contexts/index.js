import { createContext, useContext, useState } from 'react';

const CardListContext = createContext([]);
const SetCardListContext = createContext(null);

export const useCardListStore = () => {
  const cardList = useContext(CardListContext);
  const setCardList = useContext(SetCardListContext);
  return { cardList, setCardList };
};

export const CardListProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  return (
    <SetCardListContext.Provider value={setCardList}>
      <CardListContext.Provider value={cardList}>{children}</CardListContext.Provider>
    </SetCardListContext.Provider>
  );
};
