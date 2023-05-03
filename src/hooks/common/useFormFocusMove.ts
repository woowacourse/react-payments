import { useCallback } from 'react';
import type { ChangeEvent } from 'react';

const useFormFocus = () => {
  const moveFocus = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    const inputElements = Array.from(event.currentTarget.elements).filter(
      (element): element is HTMLButtonElement | HTMLInputElement =>
        element.tagName === 'BUTTON' || element.tagName === 'INPUT'
    );

    const { value, maxLength } = event.target;

    const focusedElement = inputElements.find((element) => element === document.activeElement);

    if (focusedElement instanceof HTMLButtonElement && value === '') return;
    if (focusedElement instanceof HTMLInputElement && value.length !== maxLength) return;

    const nextElement = inputElements.find(
      (_, index) => inputElements[index - 1] === focusedElement
    );
    nextElement?.focus();
  }, []);

  return { moveFocus };
};

export { useFormFocus };
