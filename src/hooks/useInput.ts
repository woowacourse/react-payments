import React, { useState } from 'react';

const useInput = <T>(defaultValue: T, condition: RegExp) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isError, setIsError] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(!condition.test(event.currentTarget.value));
    setValue(event.currentTarget.value as T);
  };

  return [value, onChange, isError] as const;
};

export default useInput;
