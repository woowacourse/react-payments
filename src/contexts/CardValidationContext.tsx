import {
  CARD_FORM_TYPE,
  CardCompanyErrorState,
  CardNumberErrorsState,
  CardNumbersSegmentType,
  CvcNumberErrorState,
  ExpirationPeriodErrorsState,
  ExpirationPeriodSegmentType,
  PasswordErrorState,
} from "./../constants/constants";
import { createContext, ReactNode, useState } from "react";
import { CardFormType } from "../constants/constants";
import { isEmpty, isNotNumber } from "../utils/validation";

export interface CardValidationContextType {
  cardNumberErrors: CardNumberErrorsState;
  expirationPeriodErrors: ExpirationPeriodErrorsState;
  cvcNumberError: CvcNumberErrorState;
  cardCompanyError: CardCompanyErrorState;
  passwordError: PasswordErrorState;

  validateCardNumber: (value: string, position: CardNumbersSegmentType) => void;
  validateExpirationPeriod: (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => void;
  validateCvcNumber: (value: string) => void;
  validateCardCompany: (value: string) => void;
  validatePassword: (value: string) => void;

  hasErrorByType: (type: CardFormType) => boolean;
}

const initialState = {
  cardNumbers: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
  expirationPeriod: {
    month: false,
    year: false,
  },
  cvcNumber: false,
  cardCompany: false,
  password: false,
};

export const CardValidationContext =
  createContext<CardValidationContextType | null>(null);

export function CardValidationProvider({ children }: { children: ReactNode }) {
  const [cardNumberErrors, setCardNumberErrors] =
    useState<CardNumberErrorsState>(initialState.cardNumbers);
  const [expirationPeriodErrors, setExpirationPeriodErrors] =
    useState<ExpirationPeriodErrorsState>(initialState.expirationPeriod);
  const [cvcNumberError, setCvcNumberError] = useState<CvcNumberErrorState>(
    initialState.cvcNumber
  );
  const [cardCompanyError, setCardCompanyError] =
    useState<CardCompanyErrorState>(initialState.cardCompany);
  const [passwordError, setPasswordError] = useState<PasswordErrorState>(
    initialState.password
  );

  const validateCardNumber = (
    value: string,
    position: CardNumbersSegmentType
  ) => {
    setCardNumberErrors((prev) => ({
      ...prev,
      [position]: isNotNumber(value),
    }));
  };

  const validateExpirationPeriod = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    setExpirationPeriodErrors((prev) => ({
      ...prev,
      [position]: isNotNumber(value),
    }));
  };

  const validateCvcNumber = (value: string) => {
    setCvcNumberError(isNotNumber(value));
  };

  const validateCardCompany = (value: string) => {
    setCardCompanyError(isEmpty(value));
  };

  const validatePassword = (value: string) => {
    setPasswordError(isNotNumber(value));
  };

  const hasErrorByType = (type: CardFormType): boolean => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return Object.values(cardNumberErrors).some((state) => state);
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(expirationPeriodErrors).some((state) => state);
      case CARD_FORM_TYPE.cvcNumber:
        return cvcNumberError;
      case CARD_FORM_TYPE.cardCompany:
        return cardCompanyError;
      case CARD_FORM_TYPE.password:
        return passwordError;
    }
  };

  return (
    <CardValidationContext.Provider
      value={{
        cardNumberErrors,
        expirationPeriodErrors,
        cvcNumberError,
        cardCompanyError,
        passwordError,

        validateCardNumber,
        validateExpirationPeriod,
        validateCvcNumber,
        validateCardCompany,
        validatePassword,

        hasErrorByType,
      }}
    >
      {children}
    </CardValidationContext.Provider>
  );
}
