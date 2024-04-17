import { useState } from 'react';

type ErrorMessage = string;

const useInput = (initialValue = '', inquireValidity: (value: string) => ErrorMessage) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const updateErrorMessage = () => {
    setErrorMessage(inquireValidity(value));
  };

  return {
    value,
    setValue,
    handleChange,
    updateErrorMessage,
    errorMessage,
  };
};

export default useInput;
