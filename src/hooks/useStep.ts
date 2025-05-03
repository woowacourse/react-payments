import { useState } from 'react';

export enum InputStep {
  CARD_NUMBER = 1,
  CARD_COMPANY = 2,
  EXPIRATION_DATE = 3,
  CVC = 4,
  PASSWORD = 5,
}

function useStep(initialStep: InputStep = InputStep.CARD_NUMBER) {
  const [currentStep, setCurrentStep] = useState<InputStep>(initialStep);

  const goToNextStep = (step: number) => {
    if (currentStep > step) return;
    setCurrentStep((prev) => (prev < InputStep.PASSWORD + 1 ? prev + 1 : prev));
  };

  const isPassedStep = (step: InputStep) => {
    return currentStep >= step;
  };

  return {
    goToNextStep,
    isPassedStep,
  };
}

export default useStep;
