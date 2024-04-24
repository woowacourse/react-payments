import { useState } from 'react';
import useValidations, { ValidationType } from './useValidations';

const useInput = <T extends HTMLInputElement | HTMLSelectElement>(
  onChangeValidations: ValidationType[],
  onBlurValidations?: ValidationType[],
) => {
  const [inputState, setInputState] = useState('');
  const { isError, errorMessage, validate } = useValidations();

  const inputChangeHandler = (e: React.ChangeEvent<T>) => {
    const result = validate(e.target.value, onChangeValidations);

    if (!result) {
      setInputState(inputState);
      return;
    }

    setInputState(e.target.value);
  };

  const inputOnBlurHandler = (e: React.FocusEvent<T>) => {
    validate(e.target.value, onChangeValidations);

    if (!onBlurValidations) return;
    validate(e.target.value, onBlurValidations);
  };

  return { inputState, inputChangeHandler, inputOnBlurHandler, isError, errorMessage };
};

export default useInput;
