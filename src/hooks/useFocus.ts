import { useRef, useCallback } from 'react';

export const useFocus = (focusTargetCount: number) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusInputByIndex = (index: number, callback?: () => void) => {
    const inputElement = inputRefs.current[index];

    if (index >= focusTargetCount && callback) {
      callback();
      return;
    }

    if (index < 0 && callback) {
      callback();
      return;
    }

    if (inputElement === undefined) return;

    inputElement.focus();
    inputElement.select();
  };

  const autoFocusFirstInput = useCallback(() => {
    const firstInputRef = inputRefs.current[0];

    if (firstInputRef === undefined) return;

    firstInputRef.focus();
    firstInputRef.click();
    firstInputRef.select();
  }, []);

  return {
    inputRefs,
    focusInputByIndex,
    autoFocusFirstInput,
  };
};
