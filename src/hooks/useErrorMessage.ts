import { useState, useEffect } from 'react';

export function useErrorMessage(initialErrors: boolean[]) {
  const [errors, setErrors] = useState(initialErrors);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (errors.every((e) => e === false)) {
      setErrorMessage('');
    }
  }, [errors]);

  return {
    errors,
    setErrors,
    errorMessage,
    setErrorMessage,
  };
}
