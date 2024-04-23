import { useState } from 'react';

const useCardNumbersInput = (maxLength: number) => {
  const [numbers, setNumbers] = useState(Array(maxLength).fill(''));
  const [numberErrors, setNumberErrors] = useState(
    Array(maxLength).fill(false),
  );

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
  };

  return { numbers, numberErrors, handleNumberChange };
};

export default useCardNumbersInput;
