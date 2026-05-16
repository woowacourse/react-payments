import { useState } from "react";
import { validateExpireDateNotPast, validateMonth, validateNumber } from "../validator";

export function useExpireDateValidation() {
  const [error, setError] = useState("");

  const validate = (updatedExpireDate: string[]): boolean => {
    for (const segment of updatedExpireDate) {
      const numberResult = validateNumber(segment);
      if (!numberResult.state) {
        setError(numberResult.message);
        return false;
      }
    }

    const monthResult = validateMonth(updatedExpireDate[0]);
    if (!monthResult.state) {
      setError(monthResult.message);
      return true;
    }

    const expireDateResult = validateExpireDateNotPast(updatedExpireDate);
    setError(expireDateResult.state ? "" : expireDateResult.message);

    return true;
  };

  return { error, validate };
}
