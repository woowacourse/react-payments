import useValidations from './useValidations';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInputs = (validate: TValidate, initialValue: Record<string, string>) => {
  const [value, setValue] = useState<Record<string, string>>(initialValue);
  const { errorStatus, validateValue } = useValidations(value, validate);

  const generateOnChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    validateValue(key, e.target.value);
    setValue({ ...value, [key]: e.target.value });
  };

  return { value, setValue, generateOnChange, errorStatus, validateValue };
};

export default useInputs;
