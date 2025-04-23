import { createContext, ReactNode, useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

export interface CardNumbers {
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
type CardBrand = string;
type Password = string;

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

  cardBrand: CardBrand;
  updateCardBrand: (value: string) => void;

  password: Password;
  updatePassword: (value: string) => void;
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
const defaultCardBrand = "";
const defaultPassword = "";

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: CardProviderProps) {
  const [cardNumbers, setCardNumbers] =
    useState<CardNumbers>(defaultCardNumbers);
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>(
    defaultExpirationPeriod
  );
  const [cvcNumber, setCvcNumber] = useState<CvcNumber>(defaultCvcNumber);
  const [cardBrand, setCardBrand] = useState<CardBrand>(defaultCardBrand);
  const [password, setPassword] = useState<Password>(defaultPassword);

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

  const updateCardBrand = (value: string) => {
    setCardBrand(value);
  };

  const updatePassword = (value: string) => {
    setPassword(value);
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

        cardBrand,
        updateCardBrand,

        password,
        updatePassword,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
