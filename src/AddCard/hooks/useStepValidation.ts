import { useRef, useMemo } from "react";
import { STEP_ORDER } from "../constants";
import { validators } from "../validation";
import type { Slices } from "../types/hook";

const useStepValidation = (
  slices: Slices,
  dependencies: React.DependencyList
) => {
  const maxReachedStep = useRef(0);

  return useMemo(() => {
    let currentValidStep = 0;
    let allValid = true;
    for (let i = 0; i < validators.length; i++) {
      if (validators[i](slices)) currentValidStep = i + 1;
      else allValid = false;
    }

    if (currentValidStep > maxReachedStep.current) {
      maxReachedStep.current = currentValidStep;
    }

    const stepIndex = Math.min(maxReachedStep.current, STEP_ORDER.length - 1);

    return {
      currentStep: STEP_ORDER[stepIndex],
      allValid: allValid && currentValidStep >= validators.length,
    };
  }, dependencies);
};
export default useStepValidation;
