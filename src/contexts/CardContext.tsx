import { createContext, ReactNode, useState } from "react";
import { CARD_COMPANY, CARD_FORM_TYPE } from "../constants/card";
import {
  CardCompanyState,
  CardFormType,
  CardNumberSegmentType,
  CardNumberState,
  CvcNumberState,
  ExpirationPeriodSegmentType,
  ExpirationPeriodState,
  PasswordState,
} from "../types/card";
import {
  isCardCompanySelected,
  isCardNumberFilled,
  isCvcNumberFilled,
  isExpirationPeriodFilled,
  isPasswordFilled,
} from "../utils/validations/filledCheckers";

export interface CardContextType {
  cardNumber: CardNumberState;
  updateCardNumber: (number: string, position: CardNumberSegmentType) => void;

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

  isFieldFilled: (type: CardFormType) => boolean;
  areAllFieldsFilled: () => boolean;
}

const initialState = {
  cardNumber: {
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
  const [cardNumber, setCardNumber] = useState<CardNumberState>(
    initialState.cardNumber
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

  const updateCardNumber = (value: string, position: CardNumberSegmentType) => {
    setCardNumber((prevCardNumber) => ({
      ...prevCardNumber,
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

  const isFieldFilled = (type: CardFormType): boolean => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumber:
        return isCardNumberFilled(cardNumber);
      case CARD_FORM_TYPE.expirationPeriod:
        return isExpirationPeriodFilled(expirationPeriod);
      case CARD_FORM_TYPE.cvcNumber:
        return isCvcNumberFilled(cvcNumber);
      case CARD_FORM_TYPE.cardCompany:
        return isCardCompanySelected(cardCompany);
      case CARD_FORM_TYPE.password:
        return isPasswordFilled(password);
      default:
        return false;
    }
  };

  const areAllFieldsFilled = (): boolean => {
    return Object.values(CARD_FORM_TYPE).every((type) => isFieldFilled(type));
  };

  return (
    <CardContext.Provider
      value={{
        cardNumber,
        updateCardNumber,

        expirationPeriod,
        updateExpirationPeriod,

        cvcNumber,
        updateCvcNumber: setCvcNumber,

        cardCompany,
        updateCardCompany: setCardCompany,

        password,
        updatePassword: setPassword,

        isFieldFilled,
        areAllFieldsFilled,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
