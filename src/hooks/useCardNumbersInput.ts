import { useState } from 'react';

const useCardNumbersInput = (maxLength: number) => {
  const [numbers, setNumbers] = useState(Array(maxLength).fill(''));
  const [numberErrors, setNumberErrors] = useState(
    Array(maxLength).fill(false),
  );
  const [isCardNumbersAllFilled, setIsCardNumbersAllFilled] = useState(false);

  const handleNumberChange = (value: string, inputIndex: number) => {
    const trimmedValue = value.slice(0, maxLength);
    const isValidNumber = trimmedValue.length === maxLength;

    const updatedNumbers = numbers.map((number, index) =>
      index === inputIndex ? trimmedValue : number,
    );
    setNumbers(updatedNumbers);

    const updateNumbersError = numberErrors.map((isError, index) =>
      index === inputIndex ? !isValidNumber : isError,
    );
    setNumberErrors(updateNumbersError);

    if (!isCardNumbersAllFilled) {
      const allFilled = updatedNumbers.every(
        (number) => number.length === maxLength,
      );

      if (allFilled) {
        setIsCardNumbersAllFilled(true);
      }
    }
  };

  return { numbers, numberErrors, isCardNumbersAllFilled, handleNumberChange };
};

export default useCardNumbersInput;
