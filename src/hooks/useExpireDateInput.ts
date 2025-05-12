import { useState } from 'react';

import { validateExpireDateInputChange } from '@/validations/validateExpireDate';
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
  const isAllValidAndFilled = checkCanMoveNextStep(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    const inputValue = e.target.value;
    const { isValid: isValidChange, errorMessage } = validateExpireDateInputChange(inputValue, key);

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
      newDateObj[key].isValid = isValidChange;

      if (isAllValidDate(newDateObj)) {
        setErrorMessage(null);
      }

      return newDateObj;
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    const inputValue = e.target.value;
    const { isValid, errorMessage } = validateExpireDate(inputValue);

    if (!isValid) {
      setErrorMessage(errorMessage);

      setValue((prev) => {
        const newDateObj = { ...prev };
        newDateObj[key].isValid = isValid;
        return newDateObj;
      });
    }
  };

  function isAllValidDate(value: ExpireDateInputType) {
    return value.month.isValid && value.year.isValid;
  }

  function isAllFilledDate(value: ExpireDateInputType) {
    return value.month.value.length === 2 && value.year.value.length === 2;
  }

  function isAllInRange(value: ExpireDateInputType) {
    const isMonthInRange = parseInt(value.month.value) >= 1 && parseInt(value.month.value) <= 12;
    const isYearInRange = parseInt(value.year.value) >= new Date().getFullYear() % 100;

    return isMonthInRange && isYearInRange;
  }

  function checkCanMoveNextStep(value: ExpireDateInputType) {
    const isAllValid = isAllValidDate(value);
    const isAllFilled = isAllFilledDate(value);
    const isAllDateInRange = isAllInRange(value);

    return isAllValid && isAllFilled && isAllDateInRange;
  }

  return { value, errorMessage, handleChange, handleBlur, isAllValidAndFilled };
};
