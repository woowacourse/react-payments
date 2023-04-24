import { ChangeEvent, RefObject, useState } from 'react';
import { Validator } from '../types/validator';

interface ValuesState {
  [key: string]: string;
}

interface ErrorState {
  [key: string]: string;
}

interface IRefs {
  [key: string]: RefObject<HTMLInputElement>;
}

const useForm = (refs: IRefs, validator: Validator) => {
  const refNames = Object.keys(refs);
  const valueObj: ValuesState = {};
  const errorObj: ErrorState = {};

  refNames.forEach((name) => {
    valueObj[name] = '';
    errorObj[name] = '';
  });

  const [values, setValues] = useState<ValuesState>(valueObj);
  const [error, setError] = useState<ErrorState>(errorObj);

  const findError = () => {
    return Object.keys(validator).some((key) => {
      const errorMessage = validator[key](values[key]);

      if (errorMessage) {
        setError((prev) => ({ ...prev, [key]: errorMessage }));
        refs[key]?.current?.focus();

        return true;
      }

      return false;
    });
  };

  const isNumeric = (value: string) => {
    return /^[0-9]*$/.test(value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const {
      name,
      value,
      maxLength,
      dataset: { type, next },
    } = e.target;

    if (value.length > maxLength) return;
    if ((type === 'number' || type === 'password') && !isNumeric(value)) return;

    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    if (value.length >= maxLength && next) {
      refs[name]?.current?.blur();
      refs[next]?.current?.focus();
    }

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { values, onChange, error, findError };
};

export default useForm;
