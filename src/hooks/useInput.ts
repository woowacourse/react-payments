import React, { useState } from 'react';

const useInput = <T>(defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value as T);
  };

  return [value, onChange] as const;
};

export default useInput;
