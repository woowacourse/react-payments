import { useState } from 'react';

interface UseInputProps {
  validator: (value: string) => boolean;
}

export interface UseInputResult {
  value: string;
  touched: boolean;
  handleChange: (inputValue: string) => void;
  handleBlur: () => void;
}

export const useInput = ({ validator }: UseInputProps): UseInputResult => {
  const [value, setValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const handleChange = (inputValue: string): void => {
    if (inputValue !== '' && !validator(inputValue)) return;
    setValue(inputValue);
    setTouched(false);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return { value, touched, handleChange, handleBlur };
};
