import { useState } from 'react';

import { CardFormFiledType } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { validateCardNumbers } from '@/validations/validateCardNumbers';
const ExpireDateIndex = {
  MONTH: 0,
  YEAR: 1,
};

export type CardInputType = {
  value: string;
  isValid: boolean;
};

const currentYear = new Date().getFullYear().toString().slice(-2);

export const useCardInput = (type: CardFormFiledType, arrLength: number, valueLength: number) => {
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
    const { isValid, errorMessage } = validateCardNumbers(value, type);

    if (!isValid) {
      setErrorMessage(errorMessage);
    }

    return isValid;
  };

  const handleBlur = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue, index);

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].isValid = isValidate;
      return newArr;
    });
  };

  return { value, errorMessage, handleChange, handleBlur };
};
