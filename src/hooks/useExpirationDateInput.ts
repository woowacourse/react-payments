import { useEffect, useState } from 'react';
import cardInputValidator from '../validators/cardInputValidator';
import { INPUT_RULES } from '../constants/card-app';

const useExpirationDateInput = () => {
  const [expirationDate, setExpirationDate] = useState<string[]>(['', '']);
  const [expirationDateErrors, setExpirationDateErrors] = useState<boolean[]>(
    Array.from<boolean>({ length: expirationDate.length }).fill(false)
  );
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false);

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const isNumericInput = /^(\d*)$/.test(value);
    const isValidLength = value.length === INPUT_RULES.maxExpirationDateLength;
    const newExpirationDate = [...expirationDate];
    newExpirationDate[index] = value;

    const isValidDate = cardInputValidator.validateExpiration(newExpirationDate);

    setExpirationDateErrors((prevErrors) => {
      const newPrevErrors = [...prevErrors];
      newPrevErrors[index] = !isValidDate || !isNumericInput || !isValidLength;
      return newPrevErrors;
    });

    if (!isNumericInput) return;

    setExpirationDate(newExpirationDate);

    if (value.length === INPUT_RULES.maxExpirationDateLength) {
      const nextInput = e.target.nextSibling;
      if (nextInput && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }
  };

  const isFieldValid = expirationDateErrors.every((error) => !error);
  const isExpirationDateComplete = isFieldValid && expirationDate.every((part) => part.length === 2);

  useEffect(() => {
    setIsNextVisible((prev) => prev || isExpirationDateComplete);
  }, [isExpirationDateComplete]);

  return {
    expirationDateState: {
      value: expirationDate,
      error: expirationDateErrors,
      isComplete: isExpirationDateComplete,
      isNextVisible: isNextVisible,
    },
    handleExpirationDateChange,
  };
};

export default useExpirationDateInput;
