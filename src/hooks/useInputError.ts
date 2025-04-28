import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

export interface InputErrorType {
  cardNumbers: Record<CardPositionType, string | null>;
  expirationPeriod: Record<PeriodPositionType, string | null>;
  cvcNumber: string | null;
  cardBrand: string | null;
  password: string | null;
}

const defaultError: InputErrorType = {
  cardNumbers: {
    first: null,
    second: null,
    third: null,
    fourth: null,
  },
  expirationPeriod: {
    month: null,
    year: null,
  },
  cvcNumber: null,
  cardBrand: null,
  password: null,
};

const isInteger = (value: string) => Number.isInteger(Number(value));
const isPositive = (value: string) => Number(value) >= 0;
const isValidMonth = (value: string) => {
  const num = Number(value);
  return num >= 1 && num <= 12;
};
const isValidYear = (value: string) => {
  const num = Number(value);
  return num >= 25 && num <= 99;
};

export function useInputError() {
  const [error, setError] = useState<InputErrorType>(defaultError);

  const validateNumber = (value: string) => {
    if (!isInteger(value)) return "숫자만 입력할 수 있습니다.";
    if (!isPositive(value)) return "0 이상의 값을 입력해야 합니다.";
    return null;
  };

  const validateCardNumber = (value: string, position: CardPositionType) => {
    const message = validateNumber(value);
    setError((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: message,
      },
    }));
  };

  const validateExpirationPeriod = (
    value: string,
    position: PeriodPositionType
  ) => {
    let message = validateNumber(value);
    if (!message) {
      if (position === "month" && !isValidMonth(value)) {
        message = "1~12 사이의 월을 입력하세요.";
      }
      if (position === "year" && !isValidYear(value)) {
        message = "25~99 사이의 연도를 입력하세요.";
      }
    }
    setError((prev) => ({
      ...prev,
      expirationPeriod: {
        ...prev.expirationPeriod,
        [position]: message,
      },
    }));
  };

  const validateCvcNumber = (value: string) => {
    const message = validateNumber(value);
    setError((prev) => ({
      ...prev,
      cvcNumber: message,
    }));
  };

  const validatePassword = (value: string) => {
    const message = validateNumber(value);
    setError((prev) => ({
      ...prev,
      password: message,
    }));
  };

  return {
    error,
    validators: {
      validateCardNumber,
      validateExpirationPeriod,
      validateCvcNumber,
      validatePassword,
    },
  };
}
