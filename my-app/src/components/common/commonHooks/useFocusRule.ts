import { useRef } from 'react';

export const useFocusRule = (totalLength: number) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusMove = (index: number) => {
    if (index < totalLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return { inputRefs, focusMove };
};
