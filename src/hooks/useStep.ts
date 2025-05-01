import { useState } from 'react';

function useStep(initValue: number) {
  const [step, setStep] = useState(initValue);

  function increaseStep() {
    setStep((prev) => prev + 1);
  }

  return { step, increaseStep };
}

export default useStep;
