import { useEffect } from 'react';
import { findNotCompletedInput } from '../utils/util/form';

export const useAutoFocus = ({
  value,
  maxLength,
  inputElementsRef,
  inputElementKey,
  sideEffect,
}) => {
  useEffect(() => {
    if (value.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;
      const currentInput = inputElementsMap[inputElementKey];

      const { nextInput } = findNotCompletedInput(inputElementsMap, inputElementKey);

      sideEffect(currentInput, nextInput);
    }
  }, [value, inputElementsRef, inputElementKey, maxLength, sideEffect]);
};
