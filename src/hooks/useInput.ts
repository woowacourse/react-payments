import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { Dispatch, SetStateAction, useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

export interface IInputControl {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateValue: (targetValue: string) => void;
  errorStatus: IErrorStatus;
}

const useInput = (validate: TValidate, initialValue: string = ''): IInputControl => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, validateValue } = useValidation(value, validate);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateValue(e.target.value);
    setValue(e.target.value);
  };

  return { value, setValue, onChange, validateValue, errorStatus };
};

export default useInput;
