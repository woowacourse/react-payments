import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { CardType } from "../types/card";

type CardContextType = {
  cards: CardType[];
  setCards: (newCard: CardType) => void;
};

export const CardContext = createContext<CardContextType>({
  cards: [],
  setCards: () => {},
});

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [cards, setCards] = useState<CardType[]>(
    JSON.parse(localStorage.getItem("cards") ?? "[]")
  );

  useEffect(() => {
    saveInLocalStorage(cards);
  }, [cards]);

  const addNewCard = (newCard: CardType) => {
    setCards((prev) => [...prev, newCard]);
  };

  const saveInLocalStorage = (newCards: CardType[]) => {
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  return (
    <CardContext.Provider value={{ cards, setCards: addNewCard }}>
      {children}
    </CardContext.Provider>
  );
};
