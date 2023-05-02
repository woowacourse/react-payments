import { createContext, useState } from "react";
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
  const [cards, setCards] = useState<Card[]>([]);

  const value = { cards, setCards };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
