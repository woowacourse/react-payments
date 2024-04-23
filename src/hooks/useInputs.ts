import useValidations from './useValidations';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInputs = (validate: TValidate, initialValue: Record<string, string>) => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, updateErrorStatus } = useValidations(value, validate);

  return { value, setValue, errorStatus, updateErrorStatus };
};

export default useInputs;
