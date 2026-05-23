import { useRef } from 'react';

export const useInputRefs = (values: string[]) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const setInputRef = (index: number) => (element: HTMLInputElement | null) => {
    inputRefs.current[index] = element;
  };

  const focusNextInput = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };
  const focusPreviousInput = (index: number) => {
    inputRefs.current[index - 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key !== 'Backspace') return;

    if (values[index] !== '') return;
    if (index === 0) return;

    focusPreviousInput(index);
  };

  return {
    setInputRef,
    focusNextInput,
    handleKeyDown,
  };
};
