import { useState } from 'react';

interface UseInputProps {
  validate: (value: string) => boolean;
  handleError: () => void;
}

const useInput = ({ validate, handleError }: UseInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    if (!validate(value)) {
      handleError();
      return;
    }

    setValue(value);
  };

  return [value, handleChange];
};

export default useInput;
