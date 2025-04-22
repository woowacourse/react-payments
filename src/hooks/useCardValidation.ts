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

// TODO: 상태별로 훅을 모두 분리하는게 맞을까?
// TODO: cardCompany와 비밀번호 input 상태에 대한 get, set 정의
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

  const getCardNumberErrors = () => validationErrors.cardNumbers;
  const getExpirationPeriodErrors = () => validationErrors.expirationPeriod;
  const getCvcNumberError = () => validationErrors.cvcNumber;

  return {
    validationErrors,
    getCardNumberErrors,
    getExpirationPeriodErrors,
    getCvcNumberError,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
  };
}
