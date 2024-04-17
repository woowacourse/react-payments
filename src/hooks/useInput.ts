import { useState } from 'react';
import { InitialState } from '../App';

const useInput = (
  initialState: InitialState,
  isValid: (e: React.ChangeEvent<HTMLInputElement>) => boolean,
) => {
  const [inputState, setInputState] = useState(initialState);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isValid(e)) {
      setInputState({
        value: e.target.value,
        isError: true,
      });
      return;
    }

    setInputState({
      value: e.target.value,
      isError: false,
    });
  };

  return { inputState, inputChangeHandler };
};

export default useInput;
