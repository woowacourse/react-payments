import { createContext, useState, PropsWithChildren, useEffect } from "react";
import { CardType } from "../types/card";

type CardContextType = {
  cards: CardType[];
  addNewCard: (newCard: CardType) => void;
  updateCard: (id: string, updatedData: Partial<CardType>) => void;
};

export const CardContext = createContext<CardContextType>({
  cards: [],
  addNewCard: () => {},
  updateCard: () => {},
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

  const updateCard = (id: string, updatedData: Partial<CardType>) => {
    setCards((prev) => {
      return prev.map((card) =>
        card.id === id ? { ...card, ...updatedData } : card
      );
    });
  };

  const saveInLocalStorage = (newCards: CardType[]) => {
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  return (
    <CardContext.Provider value={{ cards, addNewCard, updateCard }}>
      {children}
    </CardContext.Provider>
  );
};
