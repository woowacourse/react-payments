import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInput = (validate: TValidate, initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, updateErrorStatus } = useValidation(value, validate);

  return { value, setValue, errorStatus, updateErrorStatus };
};

export default useInput;
