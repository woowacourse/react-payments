import { CardType, BrandType } from "../types/card";
import { createContext } from "react";

interface NewCardContextValue {
  newCard: CardType;
  setNumbers: (numbers: string) => void;
  setExpiryDate: (expriyDate: string) => void;
  setOwner: (owner: string) => void;
  setCVC: (CVC: number) => void;
  setPassword: (password: number[]) => void;
  setBrand: (brand: BrandType) => void;
}

const defaultValue = {
  newCard: {
    numbers: "",
    expiryDate: "",
    brand: undefined,
    CVC: 0,
    password: [0, 0],
  },
  setNumbers: () => {},
  setExpiryDate: () => {},
  setOwner: () => {},
  setCVC: () => {},
  setPassword: () => {},
  setBrand: () => {},
};

export const NewCardContext = createContext<NewCardContextValue>(defaultValue);
