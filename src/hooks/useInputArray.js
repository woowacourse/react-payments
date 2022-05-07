import { useState, useMemo } from 'react';

const useInputArray = (initialValue, unitValidator, completeLength = null) => {
  const [state, setState] = useState(initialValue);
  const [isError, setIsError] = useState(false);

  const onChange = (value, index) => {
    if (!unitValidator(value, index)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setState(prevValue => {
      const newValue = [...prevValue];
      newValue[index] = value;

      return newValue;
    });
  };

  const isComplete = useMemo(() => {
    return !completeLength || state.join('').length === completeLength;
  }, [completeLength, state]);

  return [state, onChange, isComplete, isError];
};

export default useInputArray;
