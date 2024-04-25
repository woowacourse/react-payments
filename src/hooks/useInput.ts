import { useRef, useState } from 'react';
import useValidations, { ValidationType } from './useValidations';

const useInput = <T extends HTMLInputElement | HTMLSelectElement>(
  inputLimitValidation?: ValidationType,
  validations?: ValidationType[],
) => {
  const [value, setValue] = useState('');
  const { isError, errorMessage, validate } = useValidations();
  const ref = useRef<T>(null);

  const onChangeHandler = (e: React.ChangeEvent<T>) => {
    if (inputLimitValidation && !validate(e.target.value, [inputLimitValidation])) {
      setValue(value);
      return;
    }

    if (validations) validate(e.target.value, validations);
    setValue(e.target.value);
  };

  const onBlurHandler = (e: React.FocusEvent<T>) => {
    if (validations) validate(e.target.value, validations);
  };

  return { ref, value, onChangeHandler, onBlurHandler, isError, errorMessage };
};

export default useInput;
