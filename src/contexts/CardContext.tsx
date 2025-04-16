import { createContext, ReactNode, useState } from "react";
import {
  CARD_POSITION,
  CardPositionType,
  PERIOD_POSITION,
  PeriodPositionType,
} from "../constants/constants";

interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface ExpirationPeriod {
  month: string;
  year: string;
}

type CvcNumber = string;

export interface CardContextType {
  cardNumbers: CardNumbers;
  updateCardNumber: (number: string, position: CardPositionType) => void;

  expirationPeriod: ExpirationPeriod;
  updateExpirationPeriod: (
    period: string,
    position: PeriodPositionType
  ) => void;

  cvcNumber: CvcNumber;
  setCvcNumber: React.Dispatch<React.SetStateAction<CvcNumber>>;
}

interface CardProviderProps {
  children: ReactNode;
}

const defaultCardNumbers = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const defaultExpirationPeriod = {
  month: "",
  year: "",
};

const defaultCvcNumber = "";

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: CardProviderProps) {
  const [cardNumbers, setCardNumbers] =
    useState<CardNumbers>(defaultCardNumbers);
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>(
    defaultExpirationPeriod
  );
  const [cvcNumber, setCvcNumber] = useState<CvcNumber>(defaultCvcNumber);

  const updateCardNumber = (number: string, position: CardPositionType) => {
    setCardNumbers((prevNumbers) => ({
      ...prevNumbers,
      [CARD_POSITION[position]]: number,
    }));
  };

  const updateExpirationPeriod = (
    period: string,
    position: PeriodPositionType
  ) => {
    setExpirationPeriod((prevExpirationPeriod) => ({
      ...prevExpirationPeriod,
      [PERIOD_POSITION[position]]: period,
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
        setCvcNumber,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
