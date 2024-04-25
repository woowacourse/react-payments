import { useState } from 'react';

const useInputs = (defaultValue: string[]) => {
  const [values, setValues] = useState(defaultValue);
  const [isClicked, setIsClicked] = useState(defaultValue.map(() => false));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isClicked[index]) {
      const newIsClicked = [...isClicked];
      newIsClicked[index] = true;

      setIsClicked(newIsClicked);
    }

    const newValues = [...values];
    newValues[index] = e.target.value;

    setValues(newValues);
  };

  return { values, isClicked, onChange };
};

export default useInputs;
