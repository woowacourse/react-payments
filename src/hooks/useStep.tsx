import { useState } from 'react';
import { DEFAULT_CARD_BOOLEAN } from '../constants/card';

const useStep = () => {
  const [step, setStep] =
    useState<Record<string, boolean>>(DEFAULT_CARD_BOOLEAN);

  const handleNext = (currentStep: string) => {
    setStep((prev) => {
      return {
        ...prev,
        [currentStep]: true,
      };
    });
  };

  return {
    step,
    handleNext,
  };
};

export default useStep;
