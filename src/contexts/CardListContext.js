import { useState, createContext } from 'react';

export const CardListContext = createContext();

export const CardListContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const addCard = (card) => {
    const cardClone = {
      ...card,
      number: { ...card.number },
      company: { ...card.company },
      password: { ...card.password },
    };
    setCardList((prevList) => [...prevList, cardClone]);
  };
  const reset = () => setCardList(() => []);

  return (
    <CardListContext.Provider value={{ cardList, setCardList, addCard, reset }}>{children}</CardListContext.Provider>
  );
};
