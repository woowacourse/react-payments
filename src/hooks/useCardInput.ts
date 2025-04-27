import { useState } from 'react';

import { CardFormFiledType } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { validateCardNumbers, validateInputChange } from '@/validations/validateCardNumbers';

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

  password: {
    valueLength: 2,
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const { isValid, errorMessage } = validateInputChange(inputValue);

    if (!isValid) {
      setErrorMessage(errorMessage);

      setValue((prev) => {
        const newArr = [...prev];
        newArr[index].isValid = isValid;
        return newArr;
      });

      return;
    }

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].value = inputValue;
      return newArr;
    });

    setErrorMessage(null);
  };

  const validateInput = (value: string) => {
    const { isValid, errorMessage } = validateCardNumbers(value, type);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return isValid;
    }

    setErrorMessage(null);
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
