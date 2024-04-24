import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInput = (validate: TValidate, initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, validateValue } = useValidation(value, validate);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateValue(e.target.value);
    setValue(e.target.value);
  };

  return { value, setValue, onChange, validateValue, errorStatus };
};

export default useInput;
