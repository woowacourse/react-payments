import { useState } from 'react';

export type CardInputType = {
  value: string;
  isValid: boolean;
};

export const useCardInput = (arrLength: number, valueLength: number) => {
  const [value, setValue] = useState<CardInputType[]>(
    Array.from({ length: arrLength }, () => ({ value: '', isValid: true }))
  );
  const [errorMessage, setErrorMessage] = useState<string>('숫자를 입력하세요.');

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const validateInput = (value: string) => {
    if (value.length < valueLength) {
      setErrorMessage(`${valueLength}자리의 숫자를 입력하셔야 합니다.`);
      return false;
    }

    if (!new RegExp(`^\\d{${valueLength}}$`).test(value)) {
      setErrorMessage('숫자를 입력하세요.');
      return false;
    }

    return true;
  };

  const handleBlur = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue);

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].isValid = isValidate;
      return newArr;
    });
  };

  return { value, errorMessage, handleChange, handleBlur };
};
