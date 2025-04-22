import { createContext, ReactNode, useState } from "react";
import {
  CardNumbersState,
  CardPositionType,
  CvcNumberState,
  ExpirationPeriodState,
  PeriodPositionType,
} from "../constants/constants";

export interface CardContextType {
  cardNumbers: CardNumbersState;
  updateCardNumber: (number: string, position: CardPositionType) => void;

  expirationPeriod: ExpirationPeriodState;
  updateExpirationPeriod: (
    period: string,
    position: PeriodPositionType
  ) => void;

  cvcNumber: CvcNumberState;
  updateCvcNumber: React.Dispatch<React.SetStateAction<CvcNumberState>>;
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
  const [cardNumbers, setCardNumbers] = useState<CardNumbersState>(
    initialState.cardNumbers
  );
  const [expirationPeriod, setExpirationPeriod] =
    useState<ExpirationPeriodState>(initialState.expirationPeriod);
  const [cvcNumber, setCvcNumber] = useState<CvcNumberState>(
    initialState.cvcNumber
  );

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
