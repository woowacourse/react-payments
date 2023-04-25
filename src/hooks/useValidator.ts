import { useState, useCallback } from 'react';
import type { ValidatorResponseType } from '../types';

type ValidatorFunctionType = (value: string) => ValidatorResponseType;

const useValidator = (validatorFunction: ValidatorFunctionType) => {
  const [value, setValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const setValueWithValidation = useCallback(
    (value: string) => {
      const validateResult = validatorFunction(value);

      setValue(() => value);
      setIsValid(() => validateResult.result);
      setErrorMessage(() => validateResult.errorMessage);
    },
    [validatorFunction]
  );

  return { value, isValid, errorMessage, setValueWithValidation };
};

export default useValidator;
