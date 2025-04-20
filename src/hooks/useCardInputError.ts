import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";
import { isNotNumber } from "../utils/validation";

export interface CardInputErrorType {
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

export function useCardInputError() {
  const [error, setError] = useState<CardInputErrorType>(defaultError);

  const setCardNumberError = (value: string, position: CardPositionType) => {
    setError((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: isNotNumber(value),
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
        [position]: isNotNumber(value),
      },
    }));
  };

  const setCvcNumberError = (value: string) => {
    setError((prev) => ({
      ...prev,
      cvcNumber: isNotNumber(value),
    }));
  };

  return {
    error,
    setCardNumberError,
    setExpirationPeriodError,
    setCvcNumberError,
  };
}
