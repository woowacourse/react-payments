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
    setIsComplete((prev) => ({
      ...prev,
      cardNumbers: {
        ...prev.cardNumbers,
        [position]: value.length === 4,
      },
    }));
  };
  const updateCardBrandIsComplete = (value: string) => {
    setIsComplete((prev) => ({
      ...prev,
      cardBrand: value !== "",
    }));
  };
  const updateExpirationPeriodIsComplete = (
    value: string,
    position?: Position
  ) => {
    if (!position) return;

    setIsComplete((prev) => ({
      ...prev,
      expirationPeriod: {
        ...prev.expirationPeriod,
        [position]: value.length === 2,
      },
    }));
  };
  const updateCvcIsComplete = (value: string) => {
    setIsComplete((prev) => ({
      ...prev,
      cvcNumber: value.length === 3,
    }));
  };
  const updatePasswordIsComplete = (value: string) => {
    setIsComplete((prev) => ({
      ...prev,
      password: value.length === 2,
    }));
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
