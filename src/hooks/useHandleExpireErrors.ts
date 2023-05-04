import { ChangeEvent, useState } from 'react';

export const useHandleExpireError = () => {
  const [inputError, setInputError] = useState(false);

  const handleExpireError = (element: ChangeEvent<HTMLInputElement>) => {
    const data = element.target.value;
    if (data.length === 5) {
      const getMonth = Number(`${data[0]}${data[1]}`);
      const getYear = Number(`20${data[3]}${data[4]}`);
      const date = new Date();
      const nowMonth = date.getMonth();
      const nowYear = date.getFullYear();
      if (getYear > nowYear) {
        return setInputError(false);
      }
      if (getYear === nowYear && nowMonth <= getMonth) {
        return setInputError(false);
      }
      element.target.value = '';
      return setInputError(true);
    }
  };
  return [inputError, handleExpireError] as const;
};

export const useHandleCardNumberError = () => {
  const [inputError, setInputError] = useState(true);

  const handleInputError = (element: ChangeEvent<HTMLInputElement>) => {
    const data = element.target.value;
    if (data.length === 4) return setInputError(true);
    return setInputError(false);
  };

  return [inputError, handleInputError] as const;
};

export const useHandleCVCNumberError = () => {
  const [inputError, setInputError] = useState(true);

  const handleInputError = (element: ChangeEvent<HTMLInputElement>) => {
    const data = element.target.value;
    if (data.length === 3) return setInputError(true);
    return setInputError(false);
  };

  return [inputError, handleInputError] as const;
};

export const useHandleCardPasswordError = () => {
  const [inputError, setInputError] = useState(true);

  const handleInputError = (element: ChangeEvent<HTMLInputElement>) => {
    const data = element.target.value;
    if (data.length === 1) return setInputError(true);
    return setInputError(false);
  };

  return [inputError, handleInputError] as const;
};
