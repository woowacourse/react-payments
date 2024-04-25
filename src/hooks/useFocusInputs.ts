import { useEffect, useRef } from 'react';

const useFocusInputs = (focusCount: number) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>(Array.from({ length: focusCount }, () => null));

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, [inputsRef]);

  const handleAddInputsInRef = (element: HTMLInputElement, index: number) => {
    inputsRef.current[index] = element;
  };

  const focusInputByIndex = (index: number) => {
    const inputElement = inputsRef.current[index];

    if (index >= focusCount || index < 0) return;
    if (!inputElement) return;

    inputElement.focus();
  };

  return {
    handleAddInputsInRef,
    focusInputByIndex,
  };
};

export default useFocusInputs;
