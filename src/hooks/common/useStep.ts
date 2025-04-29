import { useEffect, useState } from "react";
import { STEP_ORDER } from "../../constants/constant";
import { isStateCompletesType } from "../../types/CardInformationType";
import { isErrorCompletesType } from "../../types/useValidationType";

const useStep = (isStateCompletes: isStateCompletesType, isErrorCompletes: isErrorCompletesType) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const currentKey = STEP_ORDER[step];
    const isStateComplete = isStateCompletes[currentKey];
    const isErrorComplete = currentKey === "company" ? true : isErrorCompletes[currentKey];

    if (isStateComplete && isErrorComplete) {
      setStep((prev) => {
        if (prev < STEP_ORDER.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }
  }, [isStateCompletes, isErrorCompletes]);

  return step;
};

export default useStep;
