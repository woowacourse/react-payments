import { useState } from "react";
import { validateCvcLength, validateNumber } from "../validator";

export function useCvcValidation() {
  const [error, setError] = useState("");

  const validate = (newValue: string): boolean => {
    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return false;
    }

    const lengthResult = validateCvcLength(newValue);
    setError(lengthResult.state ? "" : lengthResult.message);

    return true;
  };

  return { error, validate };
}
