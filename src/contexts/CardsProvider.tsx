import React, { createContext, useState } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  addCard: (cardInfo: CardInfo) => void;
}

const mockData: CardInfo[] = [
  {
    cardType: { name: "검정 카드", color: "black" },
    cardNumbers: ["1111", "2222", "3333", "4444"],
    expirationDate: { month: "11", year: "22" },
    userName: "시지프",
    securityCode: "123",
    password: ["1", "1"],
    cardName: "하하하",
  },
  {
    cardType: { name: "파랑 카드", color: "blue" },
    cardNumbers: ["1111", "2222", "3333", "4444"],
    expirationDate: { month: "11", year: "22" },
    userName: "시지프",
    securityCode: "123",
    password: ["1", "1"],
    cardName: "하하하",
  },
];

export const CardsContext = createContext<Context>({ cards: [], addCard: () => {} });

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  const addCard = (cardInfo: CardInfo) => {
    setCards(prevCards => [...prevCards, cardInfo]);
  };

  return <CardsContext.Provider value={{ cards, addCard }}>{children}</CardsContext.Provider>;
};

export { CardsProvider };
