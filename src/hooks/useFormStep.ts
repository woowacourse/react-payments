import { useState } from "react";

type FormStep<StepKey extends string> = Record<
  StepKey,
  {
    order: number;
    next: StepKey | null;
  }
>;

const useFormStep = <StepKey extends string>(
  formStep: FormStep<StepKey>,
  firstStepKey: StepKey,
) => {
  const [stepKey, setStepKey] = useState<StepKey>(firstStepKey);

  const step = formStep[stepKey].order;

  const goToNextStep = () => {
    const nextStepKey = formStep[stepKey].next;

    if (!nextStepKey) return;

    setStepKey(nextStepKey);
  };

  const isStepVisible = (stepKey: StepKey) => {
    return step >= formStep[stepKey].order;
  };

  return { goToNextStep, isStepVisible };
};

export default useFormStep;
