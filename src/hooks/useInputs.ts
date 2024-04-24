import { useState } from 'react';

const useInputs = (defaultValue: string[]) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = [...value];
    newValue[index] = e.target.value;

    setValue(newValue);
  };

  return { value, onChange };
};

export default useInputs;
