import { useEffect, useRef } from 'react';

export const useFocusButtonOnTextStateLength = (textState: string, maxLength: number) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (textState && textState.length >= maxLength) {
      buttonRef.current?.focus();
    }
  }, [textState]);

  return buttonRef;
};
