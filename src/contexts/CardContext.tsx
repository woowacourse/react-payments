import { createContext, ReactNode, useState } from "react";

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
  getFirstCardNumber: () => CardNumbers["first"];
  getSecondCardNumber: () => CardNumbers["second"];
  getThirdCardNumber: () => CardNumbers["third"];
  getFourthCardNumber: () => CardNumbers["first"];

  getMonth: () => ExpirationPeriod["month"];
  getYear: () => ExpirationPeriod["year"];

  updateFirstCardNumber: (first: string) => void;
  updateSecondCardNumber: (second: string) => void;
  updateThirdCardNumber: (third: string) => void;
  updateFourthCardNumber: (fourth: string) => void;

  updateMonth: (month: string) => void;
  updateYear: (year: string) => void;

  cvcNumber: CvcNumber;
  setCvcNumber: React.Dispatch<React.SetStateAction<string>>;
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

const defaultCvcNumber = "0";

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: CardProviderProps) {
  const [cardNumbers, setCardNumbers] =
    useState<CardNumbers>(defaultCardNumbers);
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>(
    defaultExpirationPeriod
  );
  const [cvcNumber, setCvcNumber] = useState<CvcNumber>(defaultCvcNumber);

  const getFirstCardNumber = () => {
    return cardNumbers.first;
  };

  const getSecondCardNumber = () => {
    return cardNumbers.second;
  };

  const getThirdCardNumber = () => {
    return cardNumbers.third;
  };

  const getFourthCardNumber = () => {
    return cardNumbers.fourth;
  };

  const getMonth = () => {
    return expirationPeriod.month;
  };

  const getYear = () => {
    return expirationPeriod.year;
  };

  const updateFirstCardNumber = (first: string) => {
    setCardNumbers((prevCardNumbers) => ({
      ...prevCardNumbers,
      first: first,
    }));
  };

  const updateSecondCardNumber = (second: string) => {
    setCardNumbers((prevCardNumbers) => ({
      ...prevCardNumbers,
      second: second,
    }));
  };

  const updateThirdCardNumber = (third: string) => {
    setCardNumbers((prevCardNumbers) => ({
      ...prevCardNumbers,
      third: third,
    }));
  };

  const updateFourthCardNumber = (fourth: string) => {
    setCardNumbers((prevCardNumbers) => ({
      ...prevCardNumbers,
      fourth: fourth,
    }));
  };

  const updateMonth = (month: string) => {
    setExpirationPeriod((prevExpirationPeriod) => ({
      ...prevExpirationPeriod,
      month: month,
    }));
  };

  const updateYear = (year: string) => {
    setExpirationPeriod((prevExpirationPeriod) => ({
      ...prevExpirationPeriod,
      year: year,
    }));
  };

  return (
    <CardContext.Provider
      value={{
        getFirstCardNumber,
        getSecondCardNumber,
        getThirdCardNumber,
        getFourthCardNumber,
        getMonth,
        getYear,
        updateFirstCardNumber,
        updateSecondCardNumber,
        updateThirdCardNumber,
        updateFourthCardNumber,
        updateMonth,
        updateYear,
        cvcNumber,
        setCvcNumber,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
