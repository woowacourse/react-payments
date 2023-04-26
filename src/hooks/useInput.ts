import { useState } from 'react';

type InputValidator = (input: string) => boolean;

export function useInput(validator: InputValidator) {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValue(value);
    setIsError(!validator(value));
  }

  return { value, isError, handleChange };
}
