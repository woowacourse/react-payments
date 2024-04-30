import useValidations from './useValidations';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

interface IMultipleFieldsErrorStatus {
  isError: Record<string, boolean>;
  errorMessage: string;
}

export interface IInputsControl {
  value: Record<string, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  generateOnChange: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorStatus: IMultipleFieldsErrorStatus;
  validateValue: (key: string) => void;
}

const useInputs = (validate: TValidate, initialValue: Record<string, string>): IInputsControl => {
  const [value, setValue] = useState<Record<string, string>>(initialValue);
  const { errorStatus, validateValue } = useValidations(value, validate);

  const generateOnChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [key]: e.target.value });
  };

  return { value, setValue, generateOnChange, errorStatus, validateValue };
};

export default useInputs;
