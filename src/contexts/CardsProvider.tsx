import API from "apis";
import React, { createContext, useEffect, useState } from "react";
import { CardInfo } from "types/cardInfo";

interface Context {
  cards: CardInfo[];
  setCards: React.Dispatch<React.SetStateAction<CardInfo[]>>;
}

export const CardsContext = createContext<Context>({ cards: [], setCards: () => {} });

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState<CardInfo[]>([]);

  useEffect(() => {
    (async function () {
      const data = await API.getCards();

      setCards(data);
    })();
  }, []);

  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
};

export { CardsProvider };
