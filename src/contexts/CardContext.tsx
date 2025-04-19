import { createContext, ReactNode, useState } from "react";
import {
  CardNumbers,
  CardPositionType,
  CvcNumber,
  ExpirationPeriod,
  PeriodPositionType,
} from "../constants/constants";

export interface CardContextType {
  cardNumbers: CardNumbers;
  updateCardNumber: (number: string, position: CardPositionType) => void;

  expirationPeriod: ExpirationPeriod;
  updateExpirationPeriod: (
    period: string,
    position: PeriodPositionType
  ) => void;

  cvcNumber: CvcNumber;
  updateCvcNumber: React.Dispatch<React.SetStateAction<CvcNumber>>;
}

const initialState = {
  cardNumbers: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  expirationPeriod: {
    month: "",
    year: "",
  },
  cvcNumber: "",
};

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>(
    initialState.cardNumbers
  );
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>(
    initialState.expirationPeriod
  );
  const [cvcNumber, setCvcNumber] = useState<CvcNumber>(initialState.cvcNumber);

  const updateCardNumber = (value: string, position: CardPositionType) => {
    setCardNumbers((prevNumbers) => ({
      ...prevNumbers,
      [position]: value,
    }));
  };

  const updateExpirationPeriod = (
    value: string,
    position: PeriodPositionType
  ) => {
    setExpirationPeriod((prevExpirationPeriod) => ({
      ...prevExpirationPeriod,
      [position]: value,
    }));
  };

  return (
    <CardContext.Provider
      value={{
        cardNumbers,
        updateCardNumber,

        expirationPeriod,
        updateExpirationPeriod,

        cvcNumber,
        updateCvcNumber: setCvcNumber,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
