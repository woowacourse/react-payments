import { useState } from 'react';

const useInputs = (defaultValue: string[]) => {
  const [value, setValue] = useState(defaultValue);
  const [isClicked, setIsClicked] = useState(() => Array.from({ length: defaultValue.length }).map(() => false));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isClicked[index]) {
      const newIsClicked = [...isClicked];
      newIsClicked[index] = true;

      setIsClicked(newIsClicked);
    }

    const newValue = [...value];
    newValue[index] = e.target.value;

    setValue(newValue);
  };

  return { value, isClicked, onChange };
};

export default useInputs;
