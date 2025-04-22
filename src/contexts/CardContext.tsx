import { createContext, ReactNode, useState } from "react";
import {
  CardNumbersSegmentType,
  CardNumbersState,
  CvcNumberState,
  ExpirationPeriodSegmentType,
  ExpirationPeriodState,
} from "../constants/constants";

export interface CardContextType {
  cardNumbers: CardNumbersState;
  updateCardNumber: (number: string, position: CardNumbersSegmentType) => void;

  expirationPeriod: ExpirationPeriodState;
  updateExpirationPeriod: (
    period: string,
    position: ExpirationPeriodSegmentType
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

  const updateCardNumber = (
    value: string,
    position: CardNumbersSegmentType
  ) => {
    setCardNumbers((prevNumbers) => ({
      ...prevNumbers,
      [position]: value,
    }));
  };

  const updateExpirationPeriod = (
    value: string,
    position: ExpirationPeriodSegmentType
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
