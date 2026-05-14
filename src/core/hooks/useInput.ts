import { useState } from 'react';

export interface UseInputResult {
  value: string;
  touched: boolean;
  handleChange: (inputValue: string) => void;
  handleBlur: () => void;
}

export const useInput = () => {
  const [value, setValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const handleChange = (inputValue: string): void => {
    setValue(inputValue);
    setTouched(false);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return { value, touched, handleChange, handleBlur };
};
