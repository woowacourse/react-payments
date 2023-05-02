import {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import { CardType } from "../types/card";

type CardListContextType = {
  cards: CardType[];
  cardListActions: {
    addNewCard: (newCard: CardType) => void;
    updateCard: (id: string, updatedData: Partial<CardType>) => void;
  };
};

export const CardListContext = createContext<CardListContextType>({
  cards: [],
  cardListActions: {
    addNewCard: () => {},
    updateCard: () => {},
  },
});

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const [cards, setCards] = useState<CardType[]>(
    JSON.parse(localStorage.getItem("cards") ?? "[]")
  );

  const cardListActions = useMemo(
    () => ({
      addNewCard(newCard: CardType) {
        setCards((prev) => [...prev, newCard]);
      },

      updateCard(id: string, updatedData: Partial<CardType>) {
        setCards((prev) => {
          return prev.map((card) =>
            card.id === id ? { ...card, ...updatedData } : card
          );
        });
      },
    }),
    []
  );

  useEffect(() => {
    saveInLocalStorage(cards);
  }, [cards]);

  const saveInLocalStorage = (newCards: CardType[]) => {
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  return (
    <CardListContext.Provider value={{ cards, cardListActions }}>
      {children}
    </CardListContext.Provider>
  );
};
