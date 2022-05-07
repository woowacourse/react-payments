import { useState, useMemo } from 'react';

const useInput = (initialValue, validator, completeLength = null) => {
  const [state, setState] = useState(initialValue);
  const [isError, setIsError] = useState(false);

  const onChange = value => {
    if (!validator(value)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setState(value);
  };

  const isComplete = useMemo(() => {
    return !completeLength || state.length === completeLength;
  }, [completeLength, state]);

  return [state, onChange, isComplete, isError];
};

export default useInput;
