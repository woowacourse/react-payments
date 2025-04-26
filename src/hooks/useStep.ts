import { useState } from 'react';

export default function useStep<T extends string>(steps: readonly T[]) {
  const [step, setStep] = useState<T>(steps[0]);

  const funnel = {
    currentStep: step,
    isCurrentStep: (s: T) => s === step,
    setStep,
    toNextStep: () => {
      const index = steps.indexOf(step);
      if (index < steps.length - 1) {
        setStep(steps[index + 1]);
      }
    },
    toPrevStep: () => {
      const index = steps.indexOf(step);
      if (index > 0) {
        setStep(steps[index - 1]);
      }
    },
    reset: () => setStep(steps[0])
  };

  return funnel;
}
