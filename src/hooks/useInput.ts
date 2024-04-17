import React, { useState } from 'react';

const useInput = <T>(defaultValue: T, errorCondition: RegExp) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(!errorCondition.test(event.currentTarget.value));
    setValue(event.currentTarget.value as T);
  };

  return [value, onChange, error] as const;
};

export default useInput;
