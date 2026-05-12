import { useRef } from 'react';

export const useInputs = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const registerInputRefs = (el: HTMLInputElement, index: number) => {
    inputRefs.current[index] = el;
  };

  const moveToPrev = (index: number) => {
    inputRefs.current[index - 1]?.focus();
  };

  const moveToNext = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.currentTarget.value;

    if (inputValue === '' && e.key === 'Backspace') {
      e.preventDefault();
      moveToPrev(index);
    }

    if (inputRefs.current[index]?.selectionStart === 0 && e.key === 'ArrowLeft') {
      moveToPrev(index);
    }

    if (inputRefs.current[index]?.selectionStart === inputValue.length && e.key === 'ArrowRight') {
      moveToNext(index);
    }
  };

  return { registerInputRefs, moveToPrev, moveToNext, handleKeyDown };
};
