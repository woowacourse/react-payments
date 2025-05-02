import { useEffect, useState } from 'react';
import { StepType, STEP } from '../constants/step';

interface UseStepProps {
  isCardNumberValid: boolean;
  isCardCompanyValid: boolean;
  isCardValidityPeriodValid: boolean;
  isCardCVCValid: boolean;
}

interface StepState {
  [STEP.CardNumber]: boolean;
  [STEP.CardCompany]: boolean;
  [STEP.CardValidityPeriod]: boolean;
  [STEP.CardCVC]: boolean;
  [STEP.CardPassword]: boolean;
}

const useStep = ({
  isCardNumberValid,
  isCardCompanyValid,
  isCardValidityPeriodValid,
  isCardCVCValid,
}: UseStepProps) => {
  const [step, setStep] = useState<StepState>({
    [STEP.CardNumber]: true,
    [STEP.CardCompany]: false,
    [STEP.CardValidityPeriod]: false,
    [STEP.CardCVC]: false,
    [STEP.CardPassword]: false,
  });

  const handleNextStep = (newStep: StepType) => {
    setStep((steps) => ({ ...steps, [newStep]: true }));
  };

  const checkAndAdvanceStep = () => {
    const stepTransitions = [
      { condition: isCardNumberValid, nextStep: STEP.CardCompany },
      { condition: isCardCompanyValid, nextStep: STEP.CardValidityPeriod },
      { condition: isCardValidityPeriodValid, nextStep: STEP.CardCVC },
      { condition: isCardCVCValid, nextStep: STEP.CardPassword },
    ];

    stepTransitions.forEach(({ condition, nextStep }) => {
      if (condition) {
        handleNextStep(nextStep);
      }
    });
  };

  useEffect(checkAndAdvanceStep, [
    isCardNumberValid,
    isCardCompanyValid,
    isCardValidityPeriodValid,
    isCardCVCValid,
  ]);

  return { step, STEP_NAME: STEP };
};

export default useStep;
