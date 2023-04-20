import React, { useState } from 'react';
const usePasswordInput = <T>(initialState: T) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChange] as const;
};

export default usePasswordInput;
