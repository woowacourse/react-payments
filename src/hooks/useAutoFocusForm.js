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

  const nextInputFocus = useCallback((currentKey, notExistNextElementAction) => {
    const { current: inputElementsMap } = inputElementsRef;
    const currentInput = inputElementsMap[currentKey];

    const { nextInput } = findNotCompletedInput(inputElementsMap, currentKey);

    currentInput.isComplete = true;

    const { element: currentElement } = currentInput;
    const { element: nextElement } = nextInput;

    nextElement?.focus();
    currentElement?.blur();

    if (notExistNextElementAction && !nextElement) {
      notExistNextElementAction();
      return;
    }
  }, []);

  return [setElementByKey, nextInputFocus];
};
