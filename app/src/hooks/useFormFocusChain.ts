import { useEffect, useRef, useState } from 'react';

export function useFormFocusChain() {
  const [currentStep, setCurrentStep] = useState(0);

  const cardNumberFirstRef = useRef<HTMLInputElement>(null);
  const cardExpiryDateFirstRef = useRef<HTMLInputElement>(null);
  const cardCVCRef = useRef<HTMLInputElement>(null);
  const cardPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentStep === 2) cardExpiryDateFirstRef.current?.focus();
    if (currentStep === 3) cardCVCRef.current?.focus();
    if (currentStep === 4) cardPasswordRef.current?.focus();
  }, [currentStep]);

  return {
    refs: { cardNumberFirstRef, cardExpiryDateFirstRef, cardCVCRef, cardPasswordRef },
    currentStep,
    onCardNumberComplete: () => setCurrentStep(1),
    onCardCompanySelected: () => setCurrentStep(2),
    onCardExpiryDateComplete: () => setCurrentStep(3),
    onCardCVCComplete: () => setCurrentStep(4),
  };
}
