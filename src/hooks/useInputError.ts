import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

export interface InputErrorType {
  cardNumbers: Record<CardPositionType, boolean>;
  expirationPeriod: Record<PeriodPositionType, boolean>;
  cvcNumber: boolean;
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
};
const isValidNumber = (value: string) => {
  if (value === "") return true;
  const number = Number(value);
  return !isNaN(number) && Number.isInteger(number) && number >= 0;
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
        [position]: !isValidNumber(value),
      },
    }));
  };

  const validateCvcNumber = (value: string) => {
    setError((prev) => ({
      ...prev,
      cvcNumber: !isValidNumber(value),
    }));
  };

  return {
    error,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
  };
}
