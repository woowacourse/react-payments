import { useEffect, useState } from 'react';
import { CARD_STEP, CARD_STEPS } from '../../../constants';
import { CardStepKey } from '../../../types';
import { useCardFormContext } from '../../../context/useCardFormContext';

export const useCardFormStep = (_testModeSteps: string[] | undefined) => {
  const { isCardNumberNextStep, isCardBrandNextStep, isCardExpirationDateNextStep, isCardCVCNumberNextStep } =
    useCardFormContext();

  const nextStepFlags = [
    isCardNumberNextStep,
    isCardBrandNextStep,
    isCardExpirationDateNextStep,
    isCardCVCNumberNextStep,
  ];

  const [steps, setSteps] = useState<(typeof CARD_STEPS)[CardStepKey][]>(
    (_testModeSteps as (typeof CARD_STEPS)[CardStepKey][]) || [CARD_STEP[0]],
  );

  useEffect(() => {
    if (_testModeSteps) return;

    const currentIndex = steps.length - 1;
    const canGoNext = nextStepFlags[currentIndex];
    if (canGoNext && steps.length < Object.keys(CARD_STEPS).length) {
      const nextStep = Object.values(CARD_STEPS)[steps.length];
      setSteps((prev) => [nextStep, ...prev]);
    }
  }, [nextStepFlags.join()]);

  return steps;
};
