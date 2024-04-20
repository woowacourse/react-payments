import { useState } from 'react';

export type ValidationType = {
  isError: (state: string) => boolean;
  errorMessage: string;
};

const INITIAL_ERROR_STATE = {
  state: false,
  message: '',
};

const useInput = (onChangeValidations: ValidationType[]) => {
  const [inputState, setInputState] = useState('');
  const [error, setError] = useState(INITIAL_ERROR_STATE);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = onChangeValidations.find(({ isError }) => isError(e.target.value));

    if (validationResult) {
      setError({
        state: true,
        message: validationResult.errorMessage,
      });
      setInputState(inputState);

      return;
    }

    setError(INITIAL_ERROR_STATE);
    setInputState(e.target.value);
  };

  return { inputState, inputChangeHandler, error };
};

export default useInput;
