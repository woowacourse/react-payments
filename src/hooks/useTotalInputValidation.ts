import { useState } from 'react';
import { InputStep } from './useStep';

function useTotalInputValidation(stepsCount: number) {
  const [isValidInput, setIsValidInput] = useState(Array(stepsCount).fill(false));

  const updateValidity = (step: InputStep, isValid: boolean) => {
    setIsValidInput((prev) => {
      const updated = [...prev];
      updated[step - 1] = isValid;
      return updated;
    });
  };

  const isAllValid = () => isValidInput.every((isValid) => isValid);

  return {
    isValidInput,
    updateValidity,
    isAllValid,
  };
}

export default useTotalInputValidation;
