import { useState, useMemo } from 'react';

const useInput = (initialValue, validator, completeLength = null) => {
  const [state, setState] = useState(initialValue);

  const onChange = value => {
    if (!validator(value)) return;

    setState(value);
  };

  const isComplete = useMemo(() => {
    return !completeLength || state.length === completeLength;
  }, [completeLength, state]);

  return [state, onChange, isComplete];
};

export default useInput;
