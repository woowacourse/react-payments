import { useRef } from 'react';

const useAutoFocus = (inputCounts: number) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: inputCounts }, () => null),
  );

  const setElementRef = (element: HTMLInputElement | null, index: number) => {
    inputRefs.current[index] = element;
  };

  const focusElementAtIndex = (index: number) => {
    const element = inputRefs.current[index];

    if (element) {
      element.focus();
    }
  };

  return { setElementRef, focusElementAtIndex };
};

export default useAutoFocus;
