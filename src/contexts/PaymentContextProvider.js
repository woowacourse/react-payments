import React, { createContext, useState } from 'react';
import { useCardManage } from '../hooks/useCardManage';

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('cardList');
  const { cards, cardId, setCardId, registerCard, updateCard, deleteCard } = useCardManage();

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
