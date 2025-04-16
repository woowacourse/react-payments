import { useState } from 'react';

export type CardInputType = {
  value: string;
  isValid: boolean;
};

export const useCardInput = (arrLength: number) => {
  const [value, setValue] = useState<CardInputType[]>(
    Array.from({ length: arrLength }, () => ({ value: '', isValid: true }))
  );

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const handleBlur = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => {
      const newArr = [...prev];
      const isValid = new RegExp(`^\\d{${arrLength}}$`).test(e.target.value);
      newArr[index].isValid = isValid;
      return newArr;
    });
  };

  // TODO
  return { value, handleChange, handleBlur };
};
