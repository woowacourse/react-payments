import React, { useState } from 'react';

const useInput = <T>(defaultValue: T, condition: RegExp) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(!condition.test(event.currentTarget.value));
    setValue(event.currentTarget.value as T);
  };

  return [value, onChange, error] as const;
};

export default useInput;
