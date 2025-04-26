import { useEffect, useState } from 'react';
import { StepType, STEP } from '../constants/step';

interface UseStepProps {
  cardNumberOkay: boolean;
  cardCompanyOkay: boolean;
  cardValidityPeriodOkay: boolean;
  cardCVCOkay: boolean;
}

interface StepState {
  [STEP.CardNumber]: boolean;
  [STEP.CardCompany]: boolean;
  [STEP.CardValidityPeriod]: boolean;
  [STEP.CardCVC]: boolean;
  [STEP.CardPassword]: boolean;
}

function useStep({
  cardNumberOkay,
  cardCompanyOkay,
  cardValidityPeriodOkay,
  cardCVCOkay,
}: UseStepProps) {
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
      { condition: cardNumberOkay, nextStep: STEP.CardCompany },
      { condition: cardCompanyOkay, nextStep: STEP.CardValidityPeriod },
      { condition: cardValidityPeriodOkay, nextStep: STEP.CardCVC },
      { condition: cardCVCOkay, nextStep: STEP.CardPassword },
    ];

    stepTransitions.forEach(({ condition, nextStep }) => {
      if (condition) {
        handleNextStep(nextStep);
      }
    });
  };

  useEffect(checkAndAdvanceStep, [
    cardNumberOkay,
    cardCompanyOkay,
    cardValidityPeriodOkay,
    cardCVCOkay,
  ]);

  return { step };
}

export default useStep;
