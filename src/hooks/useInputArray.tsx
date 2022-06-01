import { useState, useMemo } from 'react';

interface Returns {
  state: string[];
  onChange: (value: string, index: number) => void;
  isComplete: boolean;
  isError: boolean;
}

const useInputArray = (
  initialValue: string[],
  unitValidator: (value: string, index: number) => boolean,
  completeLength: number = null
): Returns => {
  const [state, setState] = useState<string[]>(initialValue);
  const [isError, setIsError] = useState<boolean>(false);

  const onChange = (value: string, index: number) => {
    if (!unitValidator(value, index)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setState((prevValue: string[]) => {
      const newValue = [...prevValue];
      newValue[index] = value;

      return newValue;
    });
  };

  const isComplete: boolean = useMemo(() => {
    return !completeLength || state.join('').length === completeLength;
  }, [completeLength, state]);

  return { state, onChange, isComplete, isError };
};

export default useInputArray;
