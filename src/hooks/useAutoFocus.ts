import { useRef } from 'react';

const useAutoFocus = (valueLength: number) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusNext = (currentIndex: number) => {
    if (currentIndex === inputRefs.current.length - 1) return;

    if (inputRefs.current[currentIndex].value.length === valueLength) {
      inputRefs.current[currentIndex + 1].focus();
    }
  };

  return { inputRefs, focusNext };
};

export default useAutoFocus;
