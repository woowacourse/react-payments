import { createContext, useState } from "react";
import { Card } from "../types";
import { emptyArrowFuction } from "../util/initialValue";

interface GlobalState {
  cards: Card[];
  currentIndex: number;
  setCards: (value: Card[]) => void;
  setCurrentIndex: (value: number) => void;
}

export const GlobalContext = createContext<GlobalState>({
  cards: [],
  currentIndex: 0,
  setCards: emptyArrowFuction,
  setCurrentIndex: emptyArrowFuction,
});

export const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const value = { cards, currentIndex, setCards, setCurrentIndex };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
