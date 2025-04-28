import { useState } from 'react';

import { validateInputChange } from '@/validations/validateCardNumbers';
import { validateExpireDate } from '@/validations/validateExpireDate';

type ExpireDateInputValueType = {
  value: string;
  isValid: boolean;
};

export type ExpireDateInputType = {
  month: ExpireDateInputValueType;
  year: ExpireDateInputValueType;
};

export type ExpireDateInputKey = keyof ExpireDateInputType;

export const useExpireDateInput = () => {
  const [value, setValue] = useState<ExpireDateInputType>({
    month: { value: '', isValid: true },
    year: { value: '', isValid: true },
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isAllValid =
    value.month.isValid &&
    value.year.isValid &&
    value.month.value.length === 2 &&
    value.year.value.length === 2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    const inputValue = e.target.value;
    const { isValid: isValidChange, errorMessage } = validateInputChange(inputValue);

    if (!isValidChange) {
      setErrorMessage(errorMessage);

      setValue((prev) => {
        const newDateObj = { ...prev };
        newDateObj[key].isValid = isValidChange;
        return newDateObj;
      });

      return;
    }

    setValue((prev) => {
      const newDateObj = { ...prev };
      newDateObj[key].value = inputValue;

      if (isAllValidDate(newDateObj)) {
        setErrorMessage(null);
      }

      return newDateObj;
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue, key);

    setValue((prev) => {
      const newDateObj = { ...prev };
      newDateObj[key].isValid = isValidate;

      if (isAllValidDate(newDateObj)) {
        setErrorMessage(null);
      }

      return newDateObj;
    });
  };

  const validateInput = (value: string, key: ExpireDateInputKey) => {
    const { isValid, errorMessage } = validateExpireDate(value, key);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return isValid;
    }

    setErrorMessage(null);
    return isValid;
  };

  return { value, errorMessage, handleChange, handleBlur, isAllValid };
};
