import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

export interface InputErrorType {
  cardNumbers: Record<CardPositionType, boolean>;
  expirationPeriod: Record<PeriodPositionType, boolean>;
  cvcNumber: boolean;
  cardBrand: boolean;
  password: boolean;
}

const defaultError = {
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
  cardBrand: false,
  password: false,
};
const isValidNumber = (value: string) => {
  if (value === "") return true;
  const number = Number(value);
  return !isNaN(number) && Number.isInteger(number) && number >= 0;
};

const isValidMonthAndYear = (value: string, position: PeriodPositionType) => {
  if (position === "month") {
    const num = Number(value);
    return !isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 12;
  }
  if (position === "year") {
    const num = Number(value);
    return !isNaN(num) && Number.isInteger(num) && num >= 25 && num <= 99;
  }
};

export function useInputError() {
  const [error, setError] = useState<InputErrorType>(defaultError);

  const validateCardNumber = (value: string, position: CardPositionType) => {
    setError((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: !isValidNumber(value),
      },
    }));
  };

  const validateExpirationPeriod = (
    value: string,
    position: PeriodPositionType
  ) => {
    setError((prev) => ({
      ...prev,
      expirationPeriod: {
        ...prev.expirationPeriod,
        [position]: !isValidMonthAndYear(value, position),
      },
    }));
  };

  const validateCvcNumber = (value: string) => {
    setError((prev) => ({
      ...prev,
      cvcNumber: !isValidNumber(value),
    }));
  };
  const validatePassword = (value: string) => {
    setError((prev) => ({
      ...prev,
      password: !isValidNumber(value),
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
