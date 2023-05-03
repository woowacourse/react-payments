import { useRef } from 'react';

export const useFocus = (focusTargetCount: number) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusInputByIndex = (index: number) => {
    const inputElement = inputRefs.current[index];

    if (index >= focusTargetCount) return;
    if (index < 0) return;
    if (inputElement === undefined) return;

    inputElement.focus();
  };

  return {
    inputRefs,
    focusInputByIndex,
  };
};
