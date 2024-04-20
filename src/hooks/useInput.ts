import React, { useState } from 'react';

const useInput = <T>(defaultValue: T, regExp: RegExp, condition: (value: string) => boolean) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isError, setIsError] = useState<boolean>(false);

  const preventInvalidInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;

    if (regExp.test(newValue)) {
      setValue(newValue as T);
    } else {
      setValue(newValue.slice(0, newValue.length - 1) as T);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    preventInvalidInput(event);
    setIsError(!regExp.test(event.currentTarget.value) || !condition(event.currentTarget.value));
  };

  return [value, onChange, isError] as const;
};

export default useInput;
