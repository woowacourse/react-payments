import { useCallback, useEffect, useRef, useState } from 'react';
import { findNotCompletedInput } from '../utils/util/form';

export const useAutoFocusForm = () => {
  const inputElementsRef = useRef({});

  const setElementByKey = useCallback((key, element) => {
    if (element === null) {
      inputElementsRef.current[key] = {
        element: null,
        isComplete: false,
      };
      return;
    }

    const { required, value, maxLength } = element;

    inputElementsRef.current[key] = {
      element,
      isComplete: required ? value.length === maxLength : value.length !== 0,
    };
  }, []);

  const nextInputFocus = useCallback(
    ({ inputElementKey, notExistNextElementAction = () => {} }) => {
      const { current: inputElementsMap } = inputElementsRef;

      const currentInput = inputElementsMap[inputElementKey];
      const nextInput = findNotCompletedInput(inputElementsMap, inputElementKey);

      currentInput.isComplete = true;

      const { element: currentElement } = currentInput;
      const { element: nextElement } = nextInput;

      nextElement?.focus();
      currentElement?.blur();

      if (!nextElement) {
        notExistNextElementAction();
        return;
      }
    },
    [],
  );

  return [setElementByKey, nextInputFocus];
};
