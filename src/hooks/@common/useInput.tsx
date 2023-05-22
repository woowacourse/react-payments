import { ChangeEvent, useState } from 'react';

export function useInput(init = '', validators: ((value: string) => boolean)[] = []) {
  const [value, setValue] = useState(init);
  const errors: { type: string } = { type: '' };

  const isValid = () => validators.every((validator) => validator(value));
  const findFailedValidator = () => validators.find((validator) => !validator(value));

  const checkError = (value: string) => {
    const failedValidator = findFailedValidator();

    failedValidator && (errors['type'] = failedValidator.name);
  };
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    checkError(value);
    setValue(value);
  };

  return { value, errors, onChange, isValid };
}
