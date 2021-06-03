import React, { createContext, useState } from 'react';

const cardFrame = {
  nickName: '',
  company: '',
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  validDay: { firstDigit: '', secondDigit: '' },
};

const registeredCards = [
  {
    nickName: '피터',
    company: '공원',
    numbers: { first: '1995', second: '0519', third: '0101', fourth: '0101' },
    owner: 'HYUN CHEOL',
    validDay: { month: '18', year: '18' },
  },
  {
    nickName: '심바',
    company: '준',
    numbers: { first: '1994', second: '1017', third: '1001', fourth: '0110' },
    owner: 'SUN BEAN',
    validDay: { month: '18', year: '18' },
  },
];

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('cardList');
  const [cards, setCards] = useState(registeredCards);
  const [card, setCard] = useState(cardFrame);

  const updateCardContent = (cardInput) => {
    setCard((card) => ({ ...card, ...cardInput }));
  };

  const registerCard = (newCard) => {
    setCards((cards) => [...cards, newCard]);
  };

  return (
    <PaymentContext.Provider
      value={{ currentPage, card, cards, setCurrentPage, updateCardContent, registerCard }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
