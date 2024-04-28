import { useRef } from 'react';

const useAutoFocus = (inputCount: number, maxLength: number) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  inputRefs.current = Array(inputCount).fill(null);

  const setRef = (index: number) => (el: HTMLInputElement) => {
    inputRefs.current[index] = el;
  };

  const moveToNextInput = (currentValue: string, currentIndex: number) => {
    if (currentValue.length === maxLength && currentIndex < inputCount - 1) {
      const nextInput = inputRefs.current[currentIndex + 1];

      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return { setRef, moveToNextInput };
};

export default useAutoFocus;
