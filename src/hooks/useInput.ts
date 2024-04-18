import { useState } from 'react';

const useInput = () => {
  const [inputState, setInputState] = useState('');
  const [error, setError] = useState(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value.toUpperCase());
  };

  return { inputState, inputChangeHandler, error, setError };
};

export default useInput;
