import { createContext, ReactNode, useState } from "react";
import { CARD_FORM_TYPE } from "../constants/card";
import {
  CardFormType,
  CardNumberSegmentType,
  ExpirationPeriodSegmentType,
} from "../types/card";
import {
  CardCompanyErrorState,
  CardNumberErrorState,
  CvcNumberErrorState,
  ErrorMessage,
  ExpirationPeriodErrorState,
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
  cardNumberError: CardNumberErrorState;
  expirationPeriodError: ExpirationPeriodErrorState;
  cvcNumberError: CvcNumberErrorState;
  cardCompanyError: CardCompanyErrorState;
  passwordError: PasswordErrorState;

  validateCardNumber: (value: string, position: CardNumberSegmentType) => void;
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

const initialCardNumberState = {
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
  const [cardNumberError, setCardNumberError] = useState<CardNumberErrorState>(
    initialCardNumberState
  );
  const [expirationPeriodError, setExpirationPeriodError] =
    useState<ExpirationPeriodErrorState>(initialExpirationPeriodState);
  const [cvcNumberError, setCvcNumberError] =
    useState<CvcNumberErrorState>(initialCommonState);
  const [cardCompanyError, setCardCompanyError] =
    useState<CardCompanyErrorState>(initialCommonState);
  const [passwordError, setPasswordError] =
    useState<PasswordErrorState>(initialCommonState);

  const validateCardNumber = (
    value: string,
    position: CardNumberSegmentType
  ) => {
    const errorMessage = isErrorCardNumber(value);
    setCardNumberError((prev: CardNumberErrorState) =>
      updateMultiFieldErrorState<CardNumberSegmentType>(
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
    setExpirationPeriodError((prev: ExpirationPeriodErrorState) =>
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
      case CARD_FORM_TYPE.cardNumber:
        return Object.values(cardNumberError.hasError).some((state) => state);
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(expirationPeriodError.hasError).some(
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
      case CARD_FORM_TYPE.cardNumber:
        return cardNumberError.errorMessage;
      case CARD_FORM_TYPE.expirationPeriod:
        return expirationPeriodError.errorMessage;
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
        cardNumberError,
        expirationPeriodError,
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
