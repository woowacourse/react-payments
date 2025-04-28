import { useEffect, useState } from "react";
import { STEPS } from "../constants";
import { CardInfo } from "../../../hooks/useCardInfo";

export function useStepManager(cardInfo: CardInfo) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const isCurrentStepValid = STEPS[currentStepIndex].validate(cardInfo);
    const isLastStep = currentStepIndex === STEPS.length - 1;

    if (isCurrentStepValid && !isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }, [cardInfo, currentStepIndex]);

  const isFormsCompleted = STEPS.every((step) => step.validate(cardInfo));

  return { currentStepIndex, isFormsCompleted };
}
