import { useEffect, useRef } from 'react';

const useAutofocusElements = <T extends HTMLElement>(focusCount: number) => {
  const elementsRef = useRef<(T | null)[]>(Array.from({ length: focusCount }, () => null));

  useEffect(() => {
    elementsRef.current[0]?.focus();
  }, []);

  const handleAddElementsInRef = (element: T, index: number) => {
    elementsRef.current[index] = element;
  };

  const focusElementByIndex = (index: number) => {
    const element = elementsRef.current[index];

    if (index >= focusCount || index < 0) return;
    if (!element) return;

    element.focus();
  };

  return {
    handleAddElementsInRef,
    focusElementByIndex,
  };
};

export default useAutofocusElements;
