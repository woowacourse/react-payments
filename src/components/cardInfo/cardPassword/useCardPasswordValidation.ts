import { useState } from "react";
import { validateCardPasswordLength, validateNumber } from "../validator";

export function useCardPasswordValidation() {
  const [error, setError] = useState("");

  const validate = (newValue: string): boolean => {
    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return false;
    }

    const lengthResult = validateCardPasswordLength(newValue);
    setError(lengthResult.state ? "" : lengthResult.message);

    return true;
  };

  return { error, validate };
}
