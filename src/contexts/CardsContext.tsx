import { createContext } from "react";
import { CardType } from "../types/card";

interface CardsContextValue {
  cards: CardType[];
  addNewCard: (card: CardType) => void;
}

const defaultValue = {
  cards: [
    {
      numbers: "",
      expiryDate: "",
      brand: undefined,
      CVC: 0,
      password: [0, 0],
    },
  ],
  addNewCard: () => {},
};

export const CardsContext = createContext<CardsContextValue>(defaultValue);
