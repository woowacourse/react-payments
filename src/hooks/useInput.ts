import { useState } from 'react';

const useInput = (validators: { fn: (value: string) => boolean }[]) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const inputValue = e.target.value.toUpperCase();

    for (let validator of validators) {
      if (!validator.fn(inputValue)) {
        setError(true);
        break;
      }
    }

    setInputValue(e.target.value.toUpperCase());
  };

  return { inputValue, onChange, error };
};

export default useInput;
