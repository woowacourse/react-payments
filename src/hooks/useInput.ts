import React, { useState } from 'react';

const useInput = <T>(
  defaultValue: T,
  regExp: RegExp,
  condition: (value: string) => boolean,
  additionalEffect: (value: string) => string = (value) => value,
) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isError, setIsError] = useState<boolean>(false);

  const preventInvalidInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    additionalEffect: (value: string) => string,
  ) => {
    const newValue = event.currentTarget.value;

    if (regExp.test(newValue)) {
      setValue(additionalEffect(newValue) as T);
    } else {
      setValue(newValue.slice(0, newValue.length - 1) as T);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    preventInvalidInput(event, () => additionalEffect(event.currentTarget.value));
    setIsError(!regExp.test(event.currentTarget.value) || !condition(event.currentTarget.value));
  };

  return { value, onChange, isError };
};

export default useInput;
