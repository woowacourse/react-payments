import { useState, useEffect } from 'react';

type ErrorMessage = string;

const useInput = (initialValue = '', inquireValidity: (value: string) => ErrorMessage) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  useEffect(() => {
    if (inquireValidity) {
      setErrorMessage(() => inquireValidity(value));
    }
  }, [value, inquireValidity]);

  return {
    value,
    setValue,
    handleChange,
    errorMessage,
  };
};

export default useInput;
