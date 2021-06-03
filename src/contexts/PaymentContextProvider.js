import React, { createContext, useState } from 'react';
import { getCardId, getCardNickName } from '../utils/getCardInfo';

const registeredCards = {};

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('cardList');
  const [cards, setCards] = useState(registeredCards);
  const [cardId, setCardId] = useState(null);

  const registerCard = (card) => {
    const cardId = getCardId();
    const nickName = getCardNickName(card.company, card.owner);

    setCards((cards) => ({ ...cards, [cardId]: { ...card, nickName } }));
    setCardId(cardId);
  };

  const updateCard = (nickName) => {
    const card = cards[cardId];

    setCards((cards) => ({ ...cards, [cardId]: { ...card, nickName } }));
    setCardId(null);
  };

  const deleteCard = () => {
    setCards((cards) => {
      delete cards[cardId];

      return { ...cards };
    });
    setCardId(null);
  };

  return (
    <PaymentContext.Provider
      value={{
        currentPage,
        cards,
        cardId,
        setCurrentPage,
        setCardId,
        registerCard,
        updateCard,
        deleteCard,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
