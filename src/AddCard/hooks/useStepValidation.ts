import { useRef, useMemo } from "react";
import { STEP_ORDER } from "../constants";
import { validators } from "../validation";
import type { Slices } from "../types/hook";

const useStepValidation = (slices: Slices, dependencies: any[]) => {
  //                                                      ^
  //                                                      |
  //                                                  어떻게 할까요?

  const maxReachedStep = useRef(0);

  return useMemo(() => {
    let validAll = true;
    let currentValidStep = 0;

    for (let i = 0; i < validators.length; i++) {
      if (validators[i](slices)) {
        currentValidStep = i + 1;
      } else {
        validAll = i >= validators.length - 1;
        break;
      }
    }

    if (currentValidStep > maxReachedStep.current) {
      maxReachedStep.current = currentValidStep;
    }

    const stepIndex = Math.min(maxReachedStep.current, STEP_ORDER.length - 1);

    return {
      currentStep: STEP_ORDER[stepIndex],
      allValid: validAll && currentValidStep >= validators.length,
    };
  }, dependencies);
};
export default useStepValidation;
