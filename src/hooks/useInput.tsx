import { useState, useMemo } from 'react';

interface Returns {
  state: string;
  onChange: (value: string, index: number) => void;
  isComplete: boolean;
  isError: boolean;
}

const useInput = (
  initialValue: string,
  validator: (value: string) => boolean,
  completeLength: number = null
): Returns => {
  const [state, setState] = useState<string>(initialValue);
  const [isError, setIsError] = useState<boolean>(false);

  const onChange = (value: string) => {
    if (!validator(value)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setState(value);
  };

  const isComplete: boolean = useMemo(() => {
    return !completeLength || state.length === completeLength;
  }, [completeLength, state]);

  return { state, onChange, isComplete, isError };
};

export default useInput;
