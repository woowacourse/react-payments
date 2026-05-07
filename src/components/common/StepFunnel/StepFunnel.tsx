import { useState } from "react";

import FunnelContext, { type FunnelContextType } from "./FunnelContext";
import Step from "./Step";

interface FunnelProps {
  defaultValue?: number;
  children: React.ReactNode;
}

const StepFunnel = ({ children, defaultValue }: FunnelProps) => {
  const [currentStep, setStep] = useState<number>(defaultValue ?? 0);

  const goToStep = (modifier: (currentStep: number) => number) => {
    setStep((prev) => {
      const modifiedStep = modifier(prev);
      return modifiedStep !== undefined ? modifiedStep : prev;
    });
  };

  const contextValue: FunnelContextType<number> = {
    currentStep,
    goToStep,
  };

  return (
    <FunnelContext.Provider value={contextValue}>
      {children}
    </FunnelContext.Provider>
  );
};

StepFunnel.Step = Step;

export default StepFunnel;
