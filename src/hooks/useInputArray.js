import { useState, useMemo } from 'react';

const useInputArray = (initialValue, unitValidator, completeLength = null) => {
  const [state, setState] = useState(initialValue);

  const updateState = (value, index) => {
    if (!unitValidator(value, index)) return;

    setState(prevValue => {
      const newValue = [...prevValue];
      newValue[index] = value;

      return newValue;
    });
  };

  const isComplete = useMemo(() => {
    return !completeLength || state.join('').length === completeLength;
  }, [completeLength, state]);

  return [state, updateState, isComplete];
};

export default useInputArray;
