import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { Dispatch, SetStateAction, useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

type InputRelatedElement = HTMLInputElement | HTMLSelectElement;

export interface IInputControl<T = HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<T>) => void;
  validateValue: (targetValue: string) => void;
  errorStatus: IErrorStatus;
}

const useInput = <T extends InputRelatedElement>(validate: TValidate, initialValue: string = ''): IInputControl<T> => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, validateValue } = useValidation(value, validate);

  const onChange = (e: React.ChangeEvent<T>) => {
    validateValue(e.target.value);
    setValue(e.target.value);
  };

  return { value, setValue, onChange, validateValue, errorStatus };
};

export default useInput;
