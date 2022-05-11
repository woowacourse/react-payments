import { useState, useContext, createContext } from 'react';

const CardListContext = createContext({
  cardList: [],
  addCard: () => {},
  updateCardInfo: () => {},
  getCardInfo: () => {},
});

const CardListProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const addCard = newCardInfo => {
    const cardId = new Date().getTime() + Math.random().toFixed(3) * 1000;

    setCardList([...cardList, { id: cardId, ...newCardInfo }]);

    // TODO: json-server 또는 localStorage에 저장하는 기능 구현

    return cardId;
  };

  const updateCardInfo = updatedCardInfo => {
    const updatedCardList = cardList.map(cardInfo =>
      cardInfo.id === updatedCardInfo.id ? updatedCardInfo : cardInfo
    );

    setCardList(updatedCardList);
  };

  const getCardInfo = cardId => {
    return cardList.find(cardInfo => cardInfo.id === cardId);
  };

  return (
    <CardListContext.Provider value={{ cardList, addCard, updateCardInfo, getCardInfo }}>
      {children}
    </CardListContext.Provider>
  );
};

const useCardListContext = () => {
  return useContext(CardListContext);
};

export { CardListProvider, useCardListContext };
