import { useCallback, useEffect, useState } from "react";
import { STEP_ORDER } from "../../constants/constant";
import { isErrorCompletesType, isStateCompletesType } from "../../types/CardInformationType";

const useStep = (isStateCompletes: isStateCompletesType, isErrorCompletes: isErrorCompletesType) => {
  const [step, setStep] = useState(0);

  const checkCurrentStep = useCallback(() => {
    if (STEP_ORDER.length - 1 <= step) return false;
    const currentKey = STEP_ORDER[step];
    const isStateComplete = isStateCompletes[currentKey];
    const isErrorComplete = currentKey === "company" || isErrorCompletes[currentKey];

    return isStateComplete && isErrorComplete;
  }, [isStateCompletes, isErrorCompletes]);

  useEffect(() => {
    if (checkCurrentStep()) setStep(step + 1);
  }, [checkCurrentStep]);

  return step;
};

export default useStep;
