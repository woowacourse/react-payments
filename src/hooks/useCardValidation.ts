import {
  CARD_FORM_TYPE,
  CardNumbersSegmentType,
  ExpirationPeriodSegmentType,
} from "./../constants/constants";
import { useState } from "react";
import { CardFormType } from "../constants/constants";
import { isEmpty, isNotNumber } from "../utils/validation";

export interface CardValidationType {
  cardNumbers: Record<CardNumbersSegmentType, boolean>;
  expirationPeriod: Record<ExpirationPeriodSegmentType, boolean>;
  cvcNumber: boolean;
  cardCompany: boolean;
  password: boolean;
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

export function useCardValidation() {
  const [validationErrors, setValidationErrors] =
    useState<CardValidationType>(initialState);

  const validateCardNumber = (
    value: string,
    position: CardNumbersSegmentType
  ) => {
    setValidationErrors((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: isNotNumber(value),
      },
    }));
  };

  const validateExpirationPeriod = (
    value: string,
    position: ExpirationPeriodSegmentType
  ) => {
    setValidationErrors((prev) => ({
      ...prev,
      expirationPeriod: {
        ...prev.expirationPeriod,
        [position]: isNotNumber(value),
      },
    }));
  };

  const validateCvcNumber = (value: string) => {
    setValidationErrors((prev) => ({
      ...prev,
      cvcNumber: isNotNumber(value),
    }));
  };

  const validateCardCompany = (value: string) => {
    setValidationErrors((prev) => ({
      ...prev,
      cardCompany: isEmpty(value),
    }));
  };

  const validatePassword = (value: string) => {
    setValidationErrors((prev) => ({
      ...prev,
      password: isNotNumber(value),
    }));
  };

  const hasError = (type: CardFormType): boolean => {
    if (
      type === CARD_FORM_TYPE.cvcNumber ||
      type === CARD_FORM_TYPE.cardCompany
    ) {
      return !!validationErrors[type];
    }

    return Object.values(validationErrors[type] ?? {}).some((v) => v);
  };

  const getCardNumberErrors = () => validationErrors.cardNumbers;
  const getExpirationPeriodErrors = () => validationErrors.expirationPeriod;
  const getCvcNumberError = () => validationErrors.cvcNumber;
  const getCardCompanyError = () => validationErrors.cardCompany;
  const getPasswordError = () => validationErrors.password;

  return {
    hasError,
    getCardNumberErrors,
    getExpirationPeriodErrors,
    getCvcNumberError,
    getCardCompanyError,
    getPasswordError,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
    validateCardCompany,
    validatePassword,
  };
}
