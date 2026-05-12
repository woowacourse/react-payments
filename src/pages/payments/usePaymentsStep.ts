import { useLayoutEffect, useRef, useState } from 'react';
import { useInputFocus } from '@/core/hooks/useInputFocus';

export const usePaymentStep = () => {
  const { setInputRef, focusNext } = useInputFocus();
  const [step, setStep] = useState(0);
  const pendingFocus = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (pendingFocus.current === null) return;

    focusNext(pendingFocus.current);
    pendingFocus.current = null;
  }, [step, focusNext]);

  const toStep = (focusIndex: number) => {
    if (step > focusIndex) return;

    setStep(focusIndex);
    pendingFocus.current = focusIndex;
  };

  return { step, toStep, setInputRef };
};
