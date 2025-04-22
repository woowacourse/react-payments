import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";
import { isNotNumber } from "../utils/validation";

export interface CardValidationType {
  cardNumbers: Record<CardPositionType, boolean>;
  expirationPeriod: Record<PeriodPositionType, boolean>;
  cvcNumber: boolean;
  cardCompany: boolean;
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
};

export function useCardValidation() {
  const [validationErrors, setValidationErrors] =
    useState<CardValidationType>(initialState);

  const validateCardNumber = (value: string, position: CardPositionType) => {
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
    position: PeriodPositionType
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

  return {
    validationErrors,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
  };
}
