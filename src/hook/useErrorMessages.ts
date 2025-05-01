import { useState } from 'react';
import type { CardInputProps } from '../types/CardInputTypes';
const useErrorMessages = () => {
  const [errorMessages, setErrorMessages] = useState<CardInputProps>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    password: '',
    cardBrand: '',
  });

  const handleErrorMessages = (key: keyof CardInputProps, message: string) => {
    setErrorMessages((prev: CardInputProps) => ({
      ...prev,
      [key]: message,
    }));
  };

  return { errorMessages, handleErrorMessages };
};

export default useErrorMessages;
