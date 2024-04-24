import { useState } from 'react';
import useValidations, { ValidationType } from './useValidations';

const useInput = <T extends HTMLInputElement | HTMLSelectElement>(
  onChangeValidations: ValidationType[],
  onBlurValidations?: ValidationType[],
) => {
  const [value, setValue] = useState('');
  const { isError, errorMessage, validate } = useValidations();

  const onChangeHandler = (e: React.ChangeEvent<T>) => {
    const result = validate(e.target.value, onChangeValidations);

    if (!result) {
      setValue(value);
      return;
    }

    setValue(e.target.value);
  };

  const onBlurHandler = (e: React.FocusEvent<T>) => {
    validate(e.target.value, onChangeValidations);

    if (!onBlurValidations) return;
    validate(e.target.value, onBlurValidations);
  };

  return { value, onChangeHandler, onBlurHandler, isError, errorMessage };
};

export default useInput;
