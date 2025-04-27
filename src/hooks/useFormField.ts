import { useState } from 'react';

function useFormField(length: number = 1) {
  const [values, setValues] = useState(Array(length).fill(''));
  const [isValid, setIsValid] = useState(false);

  const handleInput = ({ e, idx }: { e: React.ChangeEvent<HTMLInputElement>; idx: number }) => {
    const newValues = [...values];
    newValues[idx] = e.target.value;
    setValues(newValues);
  };

  return {
    values,
    isValid,
    handleInput,
    setIsValid,
  };
}

export default useFormField;
