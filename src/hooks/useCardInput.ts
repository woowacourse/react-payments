import { useState } from 'react';

import { CardFormFiledType } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { validateCardNumbers } from '@/validations/validateCardNumbers';

export type CardInputType = {
  value: string;
  isValid: boolean;
};

export const CardInputTypeOptions = {
  cardNumber: {
    valueLength: 4,
    arrLength: 4,
  },

  CVC: {
    valueLength: 3,
    arrLength: 1,
  },
};

export const useCardInput = (type: CardFormFiledType) => {
  const [value, setValue] = useState<CardInputType[]>(
    Array.from({ length: CardInputTypeOptions[type].arrLength }, () => ({
      value: '',
      isValid: true,
    }))
  );
  const [errorMessage, setErrorMessage] = useState<string>('형식에 맞는 값을 입력해주세요.');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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
