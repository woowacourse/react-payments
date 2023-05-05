import { createContext, useEffect, useState } from "react";
import { Card } from "../types";
import { emptyArrowFuction } from "../util/initialValue";

interface GlobalState {
  cards: Card[];
  setCards: (value: Card[]) => void;
}

export const GlobalContext = createContext<GlobalState>({
  cards: [],
  setCards: emptyArrowFuction,
});

export const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
  const storedCards = localStorage.getItem("cards");
  const [cards, setCards] = useState<Card[]>(storedCards ? [...JSON.parse(storedCards)] : []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const value = { cards, setCards };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
