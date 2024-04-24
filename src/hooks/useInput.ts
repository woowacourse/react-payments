import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { useEffect, useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInput = (validate: TValidate, initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, validateValue } = useValidation(value, validate);

  useEffect(() => {
    validateValue();
  }, [validate, value, validateValue]);

  return { value, setValue, errorStatus, validateValue };
};

export default useInput;
