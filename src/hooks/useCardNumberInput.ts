import { useEffect, useState } from 'react';

const useCardNumberInput = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardNumberErrors, setCardNumberErrors] = useState<boolean[]>(
    Array.from<boolean>({ length: cardNumbers.length }).fill(false)
  );
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const isNumericInput = /^(\d*)$/.test(value);
    const isValidateCardNumber = value.length === 4;

    setCardNumberErrors((prevErrors) => {
      const newPrevErrors = [...prevErrors];
      newPrevErrors[index] = !isNumericInput || !isValidateCardNumber;

      return newPrevErrors;
    });

    if (!isNumericInput) return;

    setCardNumbers((prevNumbers) => {
      const newCardNumbers = [...prevNumbers];
      newCardNumbers[index] = value;

      return newCardNumbers;
    });

    if (isValidateCardNumber) {
      const nextInput = e.target.nextSibling;
      if (nextInput && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }
  };

  const isFieldValid = cardNumberErrors.every((error) => !error);
  const isCardNumberComplete = isFieldValid && cardNumbers.every((part) => part.length === 4);

  useEffect(() => {
    setIsNextVisible((prev) => prev || isCardNumberComplete);
  }, [isCardNumberComplete]);

  return {
    cardNumberState: {
      value: cardNumbers,
      error: cardNumberErrors,
      isComplete: isCardNumberComplete,
      isNextVisible,
    },
    handleCardNumberChange,
  };
};

export default useCardNumberInput;
