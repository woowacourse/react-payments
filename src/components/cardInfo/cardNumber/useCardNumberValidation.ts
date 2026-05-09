import { useState } from "react";
import { validateCardNumberLength, validateNumber } from "../validator";

export function useCardNumberValidation(cardNumber: string[]) {
  const [error, setError] = useState("");

  const validate = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ): string[] | null => {
    const newValue = e.target.value;

    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return null;
    }

    const updatedCardNumber = [...cardNumber];
    updatedCardNumber[index] = newValue;

    const lengthResult = validateCardNumberLength(updatedCardNumber);
    setError(lengthResult.state ? "" : lengthResult.message);

    return updatedCardNumber;
  };

  return { error, validate };
}
