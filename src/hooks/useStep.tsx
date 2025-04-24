import { useState } from "react";

export default function useStep() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return { step, nextStep };
}
