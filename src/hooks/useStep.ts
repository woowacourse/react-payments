import { useState } from 'react';

export enum InputStep {
  CARD_NUMBER = 0,
  CARD_COMPANY = 1,
  EXPIRATION_DATE = 2,
  CVC = 3,
  PASSWORD = 4,
  COMPLETED = 5,
}

function useStep(initialStep: InputStep = InputStep.CARD_NUMBER) {
  const [currentStep, setCurrentStep] = useState<InputStep>(initialStep);

  const goToNextStep = (step: number) => {
    if (currentStep > step) return;
    setCurrentStep((prev) => (prev < InputStep.COMPLETED ? prev + 1 : prev));
  };

  const isPassedStep = (step: InputStep) => {
    return currentStep >= step;
  };

  return {
    currentStep,
    goToNextStep,
    isPassedStep
  };
}

export default useStep;
