import { useState } from 'react';

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const [isClicked, setIsClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isClicked) setIsClicked(true);

    setValue(e.target.value);
  };

  return { value, isClicked, onChange };
};

export default useInput;
