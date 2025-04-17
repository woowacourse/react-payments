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

export function useInputError() {
  const [error, setError] = useState<InputErrorType>(defaultError);

  const setCardNumberError = (value: string, position: CardPositionType) => {
    setError((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: Number.isNaN(Number(value)),
      },
    }));
  };

  const setExpirationPeriodError = (
    value: string,
    position: PeriodPositionType
  ) => {
    setError((prev) => ({
      ...prev,
      expirationPeriod: {
        ...prev.expirationPeriod,
        [position]: Number.isNaN(Number(value)),
      },
    }));
  };

  const setCvcNumberError = (value: string) => {
    setError((prev) => ({
      ...prev,
      cvcNumber: Number.isNaN(Number(value)),
    }));
  };

  return {
    error,
    setCardNumberError,
    setExpirationPeriodError,
    setCvcNumberError,
  };
}
