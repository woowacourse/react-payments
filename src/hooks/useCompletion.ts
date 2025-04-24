import { useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

type Position = CardPositionType | PeriodPositionType | undefined;

export type CompletionState = {
  cardNumbers: Record<CardPositionType, boolean>;
  cardBrand: boolean;
  expirationPeriod: Record<PeriodPositionType, boolean>;
  cvcNumber: boolean;
  password: boolean;
};

const defaultIsComplete = {
  cardNumbers: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
  cardBrand: false,
  expirationPeriod: {
    month: false,
    year: false,
  },
  cvcNumber: false,
  password: false,
};

export function useCompletion() {
  const [isComplete, setIsComplete] =
    useState<CompletionState>(defaultIsComplete);

  const updateCardNumberIsComplete = (value: string, position?: Position) => {
    if (!position) return;
    if (value.length === 4) {
      setIsComplete((prev) => ({
        ...prev,
        cardNumbers: {
          ...prev.cardNumbers,
          [position]: true,
        },
      }));
    }
  };
  const updateCardBrandIsComplete = (value: string) => {
    if (value !== "") {
      setIsComplete((prev) => ({
        ...prev,
        cardBrand: true,
      }));
    }
  };
  const updateExpirationPeriodIsComplete = (
    value: string,
    position?: Position
  ) => {
    if (!position) return;

    if (value.length === 2) {
      setIsComplete((prev) => ({
        ...prev,
        expirationPeriod: {
          ...prev.expirationPeriod,
          [position]: true,
        },
      }));
    }
  };
  const updateCvcIsComplete = (value: string) => {
    if (value.length === 3) {
      setIsComplete((prev) => ({
        ...prev,
        cvcNumber: true,
      }));
    }
  };
  const updatePasswordIsComplete = (value: string) => {
    if (value.length === 2) {
      setIsComplete((prev) => ({
        ...prev,
        password: true,
      }));
    }
  };

  return {
    isComplete,
    updateCardNumberIsComplete,
    updateCardBrandIsComplete,
    updateExpirationPeriodIsComplete,
    updateCvcIsComplete,
    updatePasswordIsComplete,
  };
}
