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
  const isAllValidAndFilled = canMoveNextInput(value, type);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const { isValid: isValidChange, errorMessage } = validateInputChange(inputValue);

    if (!isValidChange) {
      setErrorMessage(errorMessage);

      setValue((prev) => {
        const newArr = [...prev];
        newArr[index].isValid = isValidChange;
        return newArr;
      });

      return;
    }

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].value = inputValue;

      if (isAllValidInput(newArr)) {
        setErrorMessage(null);
      }

      return newArr;
    });
  };

  const validateInput = (value: string) => {
    const { isValid, errorMessage } = validateCardNumbers(value, type);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return isValid;
    }

    return isValid;
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue);

    setValue((prev) => {
      const newArr = [...prev];
      newArr[index].isValid = isValidate;

      if (isAllValidInput(newArr)) {
        setErrorMessage(null);
      }

      return newArr;
    });
  };

  return {
    value,
    errorMessage,
    handleChange,
    handleBlur,
    isAllValidAndFilled,
  };
};

function isAllValidInput(value: CardInputType[]) {
  return value.every((item) => item.isValid);
}

function isAllFilledInput(value: CardInputType[], type: CardFormFiledType) {
  return value.every((item) => item.value.length === CardInputTypeOptions[type].valueLength);
}

function canMoveNextInput(value: CardInputType[], type: CardFormFiledType) {
  const isAllValid = isAllValidInput(value);
  const isAllFilled = isAllFilledInput(value, type);

  if (isAllValid && isAllFilled) {
    return true;
  }

  return false;
}
