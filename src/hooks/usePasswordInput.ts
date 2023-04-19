import React, { useState } from 'react';
const usePasswordInput = (initialState: object) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: any) => {
    console.log(value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChange] as const;
};

export default usePasswordInput;
