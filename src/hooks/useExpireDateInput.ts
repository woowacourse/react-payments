import { useState } from 'react';

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

function deepCopyObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export const useExpireDateInput = () => {
  const [value, setValue] = useState<ExpireDateInputType>({
    month: { value: '', isValid: true },
    year: { value: '', isValid: true },
  });
  const [errorMessage, setErrorMessage] = useState<string>('올바른 날짜를 입력해주세요.');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    setValue((prev) => {
      const newDateObj = deepCopyObject(prev);
      newDateObj[key].value = e.target.value;
      return newDateObj;
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => {
    const inputValue = e.target.value;
    const isValidate = validateInput(inputValue, key);

    setValue((prev) => {
      const newDateObj = deepCopyObject(prev);
      newDateObj[key].isValid = isValidate;
      return newDateObj;
    });
  };

  const validateInput = (value: string, key: ExpireDateInputKey) => {
    const { isValid, errorMessage } = validateExpireDate(value, key);

    if (!isValid) {
      setErrorMessage(errorMessage);
    }

    return isValid;
  };

  return { value, errorMessage, handleChange, handleBlur };
};
