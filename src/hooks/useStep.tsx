import { useState } from 'react';
import { StepType, STEP } from '../constants/step';

interface StepState {
  [STEP.CardNumber]: boolean;
  [STEP.CardCompany]: boolean;
  [STEP.CardValidityPeriod]: boolean;
  [STEP.CardCVC]: boolean;
  [STEP.CardPassword]: boolean;
}

const useStep = () => {
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

  return { step, STEP_NAME: STEP, handleNextStep };
};

export default useStep;
