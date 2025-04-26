import { useEffect, useState } from "react";
import { STEPS } from "../constants";
import { CardInfo } from "../../../hooks/useCardInfo";

export function useStepManager(cardInfo: CardInfo) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFormsCompleted, setIsFormsCompleted] = useState(false);

  useEffect(() => {
    const isCurrentStepValid = STEPS[currentStepIndex].validate(cardInfo);
    const isLastStep = currentStepIndex === STEPS.length - 1;

    const isAllStepsValid = STEPS.every((step) => step.validate(cardInfo));
    setIsFormsCompleted(isAllStepsValid);

    if (isCurrentStepValid && !isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }, [cardInfo, currentStepIndex]);

  return { currentStepIndex, setCurrentStepIndex, isFormsCompleted };
}
