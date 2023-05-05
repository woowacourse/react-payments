import { useReducer, Reducer } from "react";

import { BrandType, CardType } from "../types/card";

const initialCard = {
  numbers: "",
  expiryDate: "",
  brand: undefined,
  CVC: 0,
  password: [0, 0],
};

type Action =
  | { type: "numbers"; numbers: string }
  | { type: "expiryDate"; expiryDate: string }
  | { type: "owner"; owner: string }
  | { type: "brand"; brand: BrandType }
  | { type: "password"; password: number[] }
  | { type: "CVC"; CVC: number };

const reducer = (newCard: CardType, action: Action): CardType => {
  switch (action.type) {
    case "numbers":
      return { ...newCard, numbers: action.numbers };
    case "expiryDate":
      return { ...newCard, expiryDate: action.expiryDate };
    case "owner":
      return { ...newCard, owner: action.owner };
    case "brand":
      return { ...newCard, brand: action.brand };
    case "password":
      return { ...newCard, password: action.password };
    case "CVC":
      return { ...newCard, CVC: action.CVC };
    default:
      return newCard;
  }
};

export const useNewCard = () => {
  const [newCard, setNewCard] = useReducer<Reducer<CardType, Action>>(reducer, initialCard);

  const setNumbers = (numbers: string) => {
    setNewCard({ type: "numbers", numbers });
  };

  const setExpiryDate = (expiryDate: string) => {
    setNewCard({ type: "expiryDate", expiryDate });
  };

  const setBrand = (brand: BrandType) => {
    setNewCard({ type: "brand", brand });
  };

  const setOwner = (owner: string) => {
    setNewCard({ type: "owner", owner });
  };

  const setCVC = (CVC: number) => {
    setNewCard({ type: "CVC", CVC });
  };

  const setPassword = (password: number[]) => {
    setNewCard({ type: "password", password });
  };

  return { newCard, setNumbers, setExpiryDate, setBrand, setOwner, setCVC, setPassword };
};
