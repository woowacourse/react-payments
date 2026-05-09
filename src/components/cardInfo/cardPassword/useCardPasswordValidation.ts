import { useState } from "react";
import { validateCardPasswordLength, validateNumber } from "../validator";

export function useCardPasswordValidation() {
  const [error, setError] = useState("");

  const validate = (e: React.ChangeEvent<HTMLInputElement>): string | null => {
    const newValue = e.target.value;

    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return null;
    }

    const lengthResult = validateCardPasswordLength(newValue);
    setError(lengthResult.state ? "" : lengthResult.message);

    return newValue;
  };

  return { error, validate };
}
