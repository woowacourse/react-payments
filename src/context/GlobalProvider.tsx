import { createContext, useState } from "react";
import { Card } from "../types";

interface GlobalState {
  cards: Card[];
  addCard: (value: Card) => void;
}

export const GlobalContext = createContext<GlobalState>({
  cards: [],
  addCard: () => {},
});

export const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cards, setCards] = useState<Card[]>([]);
  const addCard = (card: Card) => setCards([...cards, card]);

  const value = { cards, addCard };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
