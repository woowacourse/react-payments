import { useEffect, useState } from 'react';

const useCheckValidity = (validator, value, errorMessage) => {
  const isValid = validator(value);
  const [error, setError] = useState('');

  const checkValidity = () => {
    isValid ? setError('') : setError(errorMessage);
  };

  useEffect(() => {
    setError('');
  }, [value]);

  return [error, setError, checkValidity];
};

export default useCheckValidity;
