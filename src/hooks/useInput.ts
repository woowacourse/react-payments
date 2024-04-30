import useValidation from './useValidation';
import { IErrorStatus } from '../validators/index.d';
import { Dispatch, SetStateAction, useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

type InputRelatedElement = HTMLInputElement | HTMLSelectElement;

export interface IInputControl<T extends InputRelatedElement = HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<T>) => void;
  onBlur: (e: React.FocusEvent<T>) => void;
  validateValue: (targetValue?: string) => void;
  errorStatus: IErrorStatus;
}

const useInput = <T extends InputRelatedElement = HTMLInputElement>(
  validate: TValidate,
  initialValue: string = '',
): IInputControl<T> => {
  const [value, setValue] = useState(initialValue);
  const { errorStatus, validateValue } = useValidation(value, validate);

  const onChange = (e: React.ChangeEvent<T>) => setValue(e.target.value);

  const onBlur = (e: React.FocusEvent<T>) => {
    validateValue(e.target.value);
  };

  return { value, setValue, onChange, onBlur, validateValue, errorStatus };
};

export default useInput;
