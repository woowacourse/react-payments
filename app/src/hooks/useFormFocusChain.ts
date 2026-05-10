import { useRef } from 'react';

export function useFormFocusChain() {
  const cardNumberFirstRef = useRef<HTMLInputElement>(null);
  const cardExpiryDateFirstRef = useRef<HTMLInputElement>(null);
  const cardCVCRef = useRef<HTMLInputElement>(null);
  const cardPasswordRef = useRef<HTMLInputElement>(null);

  return {
    refs: { cardNumberFirstRef, cardExpiryDateFirstRef, cardCVCRef, cardPasswordRef },
    onCardCompanySelected: () => cardNumberFirstRef.current?.focus(),
    onCardNumberComplete: () => cardExpiryDateFirstRef.current?.focus(),
    onCardExpiryDateComplete: () => cardCVCRef.current?.focus(),
    onCardCVCComplete: () => cardPasswordRef.current?.focus(),
  };
}
