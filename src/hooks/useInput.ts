import React, { useEffect, useState } from 'react';

const useInput = <T>(defaultValue: T, condition: RegExp) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(!condition.test(event.currentTarget.value));
    setValue(event.currentTarget.value as T);

    const isValueValid = event.currentTarget.value && condition.test(event.currentTarget.value);
    if (isValueValid && event.target.nextElementSibling) {
      (event.target.nextElementSibling as HTMLElement).focus();
    }
  };

  return [value, onChange, error] as const;
};

export default useInput;
