import { createContext, ReactNode, useState } from "react";
import { CARD_FORM_TYPE } from "../constants/card";
import {
  CardFormType,
  CardNumbersSegmentType,
  ExpirationPeriodSegmentType,
} from "../types/card";
import {
  CardCompanyErrorState,
  CardNumberErrorsState,
  CvcNumberErrorState,
  ErrorMessage,
  ExpirationPeriodErrorsState,
  PasswordErrorState,
} from "../types/validation";
import {
  updateMultiFieldErrorState,
  updateSimpleErrorState,
} from "../utils/updateErrorState";
import {
  isErrorCardCompany,
  isErrorCardNumber,
  isErrorCvcNumber,
  isErrorExpirationPeriod,
  isErrorPassword,
} from "../utils/validations/validators";

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
  areAllFieldsValid: () => boolean;
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
    setCardNumberErrors((prev: CardNumberErrorsState) =>
      updateMultiFieldErrorState<CardNumbersSegmentType>(
        errorMessage,
        position,
        prev
      )
    );
  };

  const validateExpirationPeriod = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    const errorMessage = isErrorExpirationPeriod(value, position);
    setExpirationPeriodErrors((prev: ExpirationPeriodErrorsState) =>
      updateMultiFieldErrorState<ExpirationPeriodSegmentType>(
        errorMessage,
        position,
        prev
      )
    );
  };

  const validateCvcNumber = (value: string) => {
    const errorMessage = isErrorCvcNumber(value);
    setCvcNumberError(updateSimpleErrorState(errorMessage));
  };

  const validateCardCompany = (value: string) => {
    const errorMessage = isErrorCardCompany(value);
    setCardCompanyError(updateSimpleErrorState(errorMessage));
  };

  const validatePassword = (value: string) => {
    const errorMessage = isErrorPassword(value);
    setPasswordError(updateSimpleErrorState(errorMessage));
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

  const areAllFieldsValid = (): boolean => {
    return Object.values(CARD_FORM_TYPE).every((type) => !hasErrorByType(type));
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
        areAllFieldsValid,
      }}
    >
      {children}
    </CardValidationContext.Provider>
  );
}
