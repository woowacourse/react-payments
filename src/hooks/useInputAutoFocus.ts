import { useRef, useEffect } from 'react';

export default function useInputAutoFocus(inputCount: number) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputCount);
  }, [inputCount]);

  const setInputRef = (index: number) => (inputElement: HTMLInputElement | null) => {
    inputRefs.current[index] = inputElement;
  };

  const focusNextInput = (index: number = 0) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return { setInputRef, focusNextInput };
}
