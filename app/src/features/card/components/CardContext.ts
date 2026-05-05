import { createContext } from "react";

interface CardExpiryDateType {
  "expiry-month": string;
  "expiry-year": string;
}

interface CardNumberType {
  "first-digits": string;
  "second-digits": string;
  "third-digits": string;
  "fourth-digits": string;
}

export interface CardContextType {
  cardNumber: CardNumberType;
  cardExpiryDate: CardExpiryDateType;
  setCardNumber: React.Dispatch<React.SetStateAction<CardNumberType>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardExpiryDateType>>;
}

export const CardContext = createContext<CardContextType>(null!);
