import { RefObject, useRef, useState } from 'react';
import useValidations, { ValidationType } from './useValidations';

export interface UseInputReturn<T> {
  ref: RefObject<T>;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<T>) => void;
  onBlurHandler: (e: React.FocusEvent<T>) => void;
  isError: boolean;
  errorMessage: string;
}

const useInput = <T extends HTMLInputElement | HTMLSelectElement>(
  inputLimitValidation?: ValidationType,
  validations?: ValidationType[],
) => {
  const [value, setValue] = useState('');
  const { isError, errorMessage, validate } = useValidations();
  const ref = useRef<T>(null);

  const onChangeHandler = (e: React.ChangeEvent<T>) => {
    if (inputLimitValidation && !validate(e.target.value, [inputLimitValidation])) {
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
