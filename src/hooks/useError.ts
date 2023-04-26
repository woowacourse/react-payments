import { useState, useEffect } from 'react';

export const useError = (
  input: string | string[],
  validator: (input: string | string[]) => void
) => {
  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    try {
      validator(input);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  }, [input, validator]);

  return error;
};
