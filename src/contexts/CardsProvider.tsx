import React, { createContext, useState } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  addCard: (cardInfo: CardInfo) => void;
}

export const CardsContext = createContext<Context>({ cards: [], addCard: () => {} });

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  const addCard = (cardInfo: CardInfo) => {
    setCards(prevCards => [...prevCards, cardInfo]);
  };

  return <CardsContext.Provider value={{ cards, addCard }}>{children}</CardsContext.Provider>;
};

export { CardsProvider };
