import { useEffect, useRef } from 'react';
import { findNotCompletedInput } from '../utils/util/form';

export const useNextInputFocus = (value, maxLength, inputElementsRef, inputElementKey) => {
  useEffect(() => {
    if (value.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, inputElementKey);

      inputElementsMap[inputElementKey].isComplete = true;

      element?.focus();
    }
  }, [value, inputElementsRef, inputElementKey, maxLength]);
};
