import React, { useState } from 'react';

const useInput = <T>(
  defaultValue: T,
  regExp: { valid: RegExp; invalid: RegExp },
  condition: (value: string) => boolean,
  santizeValue: (value: string) => string = (value) => value,
) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isError, setIsError] = useState<boolean>(false);

  const preventInvalidInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    santizeValue: (value: string) => string,
  ) => {
    const newValue = event.currentTarget.value;

    if (regExp.valid.test(newValue)) {
      setValue(santizeValue(newValue) as T);
    } else {
      setValue(newValue.replace(regExp.invalid, '') as T);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    preventInvalidInput(event, () => santizeValue(event.currentTarget.value));
    setIsError(
      !regExp.valid.test(event.currentTarget.value) || !condition(event.currentTarget.value),
    );
  };

  return { value, onChange, isError };
};

export default useInput;
