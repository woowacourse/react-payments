import {
  CARD_FORM_TYPE,
  CardCompanyErrorState,
  CardNumberErrorsState,
  CardNumbersSegmentType,
  CvcNumberErrorState,
  ErrorMessage,
  ExpirationPeriodErrorsState,
  ExpirationPeriodSegmentType,
  PasswordErrorState,
} from "./../constants/constants";
import { createContext, ReactNode, useState } from "react";
import { CardFormType } from "../constants/constants";
import { isErrorCardNumber } from "../utils/validations/cardNumber";
import { isErrorExpirationPeriod } from "../utils/validations/expirationPeriod";
import { isErrorCvcNumber } from "../utils/validations/cvcNumber";
import { isErrorCardCompany } from "../utils/validations/cardCompany";
import { isErrorPassword } from "../utils/validations/password";

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
  getErrorMessage: (type: CardFormType) => string | null;
}

const initialCardNumbersState = {
  errorMessage: null,
  hasError: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
};

const initialExpirationPeriodState = {
  errorMessage: null,
  hasError: {
    month: false,
    year: false,
  },
};

const initialCommonState = {
  errorMessage: null,
  hasError: false,
};

export const CardValidationContext =
  createContext<CardValidationContextType | null>(null);

export function CardValidationProvider({ children }: { children: ReactNode }) {
  const [cardNumberErrors, setCardNumberErrors] =
    useState<CardNumberErrorsState>(initialCardNumbersState);
  const [expirationPeriodErrors, setExpirationPeriodErrors] =
    useState<ExpirationPeriodErrorsState>(initialExpirationPeriodState);
  const [cvcNumberError, setCvcNumberError] =
    useState<CvcNumberErrorState>(initialCommonState);
  const [cardCompanyError, setCardCompanyError] =
    useState<CardCompanyErrorState>(initialCommonState);
  const [passwordError, setPasswordError] =
    useState<PasswordErrorState>(initialCommonState);

  const validateCardNumber = (
    value: string,
    position: CardNumbersSegmentType
  ) => {
    const errorMessage = isErrorCardNumber(value);
    setCardNumberErrors((prev: CardNumberErrorsState) => {
      const newHasError = {
        ...prev.hasError,
        [position]: !!errorMessage,
      };

      const hasAnyError = Object.values(newHasError).some(Boolean);
      const finalErrorMessage =
        errorMessage || (hasAnyError ? prev.errorMessage : null);

      return {
        errorMessage: finalErrorMessage,
        hasError: newHasError,
      };
    });
  };

  const validateExpirationPeriod = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    const errorMessage = isErrorExpirationPeriod(value, position);
    setExpirationPeriodErrors((prev: ExpirationPeriodErrorsState) => {
      const newHasError = {
        ...prev.hasError,
        [position]: !!errorMessage,
      };

      const hasAnyError = Object.values(newHasError).some(Boolean);
      const finalErrorMessage =
        errorMessage || (hasAnyError ? prev.errorMessage : null);

      return {
        errorMessage: finalErrorMessage,
        hasError: newHasError,
      };
    });
  };

  const validateCvcNumber = (value: string) => {
    const errorMessage = isErrorCvcNumber(value);
    setCvcNumberError({
      errorMessage: errorMessage,
      hasError: !!errorMessage,
    });
  };

  const validateCardCompany = (value: string) => {
    const errorMessage = isErrorCardCompany(value);
    setCardCompanyError({
      errorMessage: errorMessage,
      hasError: !!errorMessage,
    });
  };

  const validatePassword = (value: string) => {
    const errorMessage = isErrorPassword(value);
    setPasswordError({
      errorMessage: errorMessage,
      hasError: !!errorMessage,
    });
  };

  const hasErrorByType = (type: CardFormType): boolean => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return Object.values(cardNumberErrors.hasError).some((state) => state);
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(expirationPeriodErrors.hasError).some(
          (state) => state
        );
      case CARD_FORM_TYPE.cvcNumber:
        return cvcNumberError.hasError;
      case CARD_FORM_TYPE.cardCompany:
        return cardCompanyError.hasError;
      case CARD_FORM_TYPE.password:
        return passwordError.hasError;
      default:
        return false;
    }
  };

  const getErrorMessage = (type: CardFormType): ErrorMessage => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return cardNumberErrors.errorMessage;
      case CARD_FORM_TYPE.expirationPeriod:
        return expirationPeriodErrors.errorMessage;
      case CARD_FORM_TYPE.cvcNumber:
        return cvcNumberError.errorMessage;
      case CARD_FORM_TYPE.cardCompany:
        return cardCompanyError.errorMessage;
      case CARD_FORM_TYPE.password:
        return passwordError.errorMessage;
      default:
        return null;
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
        getErrorMessage,
      }}
    >
      {children}
    </CardValidationContext.Provider>
  );
}
