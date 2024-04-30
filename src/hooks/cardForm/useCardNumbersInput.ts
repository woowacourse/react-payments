import { useState } from 'react';

import { INPUT_REGEX } from '../../constants/regex';

const useCardNumbersInput = (maxLength: number, inputCount = 1) => {
  const initialNumbersState = Array(inputCount).fill('');
  const [numbers, setNumbers] = useState(initialNumbersState);
  const [numberErrors, setNumberErrors] = useState(
    Array(inputCount).fill(false),
  );
  const [isCardNumbersAllFilled, setIsCardNumbersAllFilled] = useState(false);

  const handleNumberChange = (value: string, inputIndex: number) => {
    const trimmedValue = value.slice(0, maxLength);

    const updatedNumbers = [...numbers];
    updatedNumbers[inputIndex] = trimmedValue;
    setNumbers(updatedNumbers);

    const isValidNumber = INPUT_REGEX.cardNumber.test(trimmedValue);

    const updatedNumberErrors = [...numberErrors];
    updatedNumberErrors[inputIndex] = !isValidNumber;
    setNumberErrors(updatedNumberErrors);

    if (
      !isCardNumbersAllFilled &&
      updatedNumbers.every((number) => number.length === maxLength)
    ) {
      setIsCardNumbersAllFilled(true);
    }
  };

  return { numbers, numberErrors, isCardNumbersAllFilled, handleNumberChange };
};

export default useCardNumbersInput;
