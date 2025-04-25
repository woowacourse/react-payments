import { createContext, ReactNode, useState } from "react";
import { CARD_COMPANY } from "../constants/constants";
import {
  CardCompanyState,
  CardNumbersSegmentType,
  CardNumbersState,
  CvcNumberState,
  ExpirationPeriodSegmentType,
  ExpirationPeriodState,
  PasswordState,
} from "../types/types";
import { isCardNumberFilled } from "../utils/validations/card/cardNumber";
import { isCardCompanySelected } from "../utils/validations/card/cardCompany";
import { isCvcNumberFilled } from "../utils/validations/card/cvcNumber";
import { isExpirationPeriodFilled } from "../utils/validations/card/expirationPeriod";
import { isPasswordFilled } from "../utils/validations/card/password";

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

  cardCompany: CardCompanyState;
  updateCardCompany: React.Dispatch<React.SetStateAction<CardCompanyState>>;

  password: PasswordState;
  updatePassword: React.Dispatch<React.SetStateAction<PasswordState>>;

  areAllFieldsFilled: () => boolean;
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
  cardCompany: CARD_COMPANY.none,
  password: "",
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
  const [cardCompany, setCardCompany] = useState<CardCompanyState>(
    initialState.cardCompany
  );
  const [password, setPassword] = useState<PasswordState>(
    initialState.password
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

  const areAllFieldsFilled = (): boolean => {
    return (
      isCardNumberFilled(cardNumbers) &&
      isExpirationPeriodFilled(expirationPeriod) &&
      isCvcNumberFilled(cvcNumber) &&
      isCardCompanySelected(cardCompany) &&
      isPasswordFilled(password)
    );
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

        cardCompany,
        updateCardCompany: setCardCompany,

        password,
        updatePassword: setPassword,

        areAllFieldsFilled,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
