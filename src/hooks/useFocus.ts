import { useRef } from 'react';

export const useFocus = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusInputByIndex = (index: number) => {
    const inputElement = inputRefs.current[index];

    if (inputElement === undefined) return;

    inputElement.focus();
  };

  const autoFocusFirstInput = () => {
    const firstInputRef = inputRefs.current[0];

    if (firstInputRef === undefined) return;

    firstInputRef.focus();
    firstInputRef.click();
  };

  return {
    inputRefs,
    focusInputByIndex,
    autoFocusFirstInput,
  };
};
