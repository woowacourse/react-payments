import { useState } from 'react';
import { HandleInputParams } from '../pages/CardPage/CardPage';

const useInputArrayState = (length: number) => {
  const [values, setValues] = useState(Array(length).fill(''));

  const handleInput = ({ e, idx }: HandleInputParams) => {
    const newValues = [...values];
    newValues[idx] = e.target.value;
    setValues(newValues);
  };

  return [values, handleInput] as const;
};
export default useInputArrayState;
