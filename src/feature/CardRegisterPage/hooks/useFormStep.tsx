import { useState } from "react";
import { getInitialMaxUnlockedStep } from "../utils/registerForm";
import type { CardInfoType } from "../../../shared/types/CardInfoType";

export const useFormStep = (cardInfo: CardInfoType) => {
  const [maxUnlockedStep, setMaxUnlockedStep] = useState(() =>
    getInitialMaxUnlockedStep(cardInfo),
  );

  // 한 번 열린 Step은 다시 닫히지 않는다.
  const updateMaxUnlockedStep = (step: number) => {
    setMaxUnlockedStep((previousStep) => Math.max(previousStep, step));
  };

  const unlockNextStepIfFieldValid = (isValid: boolean, nextStep: number) => {
    if (isValid) {
      updateMaxUnlockedStep(nextStep);
    }
  };

  return { maxUnlockedStep, unlockNextStepIfFieldValid };
};
