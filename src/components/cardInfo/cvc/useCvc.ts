import { useState } from "react";
import { validateCvcLength, validateNumber } from "../validator";

export function useCvc() {
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): string | null => {
    const newValue = e.target.value;

    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return null;
    }

    const lengthResult = validateCvcLength(newValue);
    setError(lengthResult.state ? "" : lengthResult.message);

    return newValue;
  };

  return { error, handleChange };
}
