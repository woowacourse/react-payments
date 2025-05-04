import { useRef, useState } from 'react';

export type NextStepArgs = {
  time?: string;
  key: string;
};

const useStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const keysRef = useRef<Set<string>>(new Set());

  const setNextStep = ({ time, key }: NextStepArgs) => {
    if (time === 'once' && keysRef.current.has(key)) {
      return;
    }

    if (!keysRef.current.has(key)) {
      keysRef.current.add(key);
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const setPrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return {
    currentStep,
    setNextStep,
    setPrevStep,
  };
};

export default useStep;
