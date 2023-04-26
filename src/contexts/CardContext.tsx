import { createContext } from "react";
import { CardType } from "../types/card";

interface CardContextValue {
  cards: CardType[];
  addNewCard: (card: CardType) => void;
}

const defaultValue = {
  cards: [
    {
      numbers: "",
      expiryDate: "",
      color: "",
      CVC: 0,
      password: [0, 0],
    },
  ],
  addNewCard: () => {},
};

export const CardContext = createContext<CardContextValue>(defaultValue);
