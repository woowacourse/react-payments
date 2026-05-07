import { useState } from "react";
import { validateExpireDateNotPast, validateMonth, validateNumber } from "../validator";

export function useExpireDate(expireDate: string[]) {
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ): string[] | null => {
    const newValue = e.target.value;

    setError("");

    const numberResult = validateNumber(newValue);
    if (!numberResult.state) {
      setError(numberResult.message);
      return null;
    }

    const updatedExpireDate = [...expireDate];
    updatedExpireDate[index] = newValue;

    const monthResult = validateMonth(updatedExpireDate[0]);
    if (!monthResult.state) {
      setError(monthResult.message);
      return updatedExpireDate;
    }

    const expireDateResult = validateExpireDateNotPast(updatedExpireDate);
    if (!expireDateResult.state) {
      setError(expireDateResult.message);
    }

    return updatedExpireDate;
  };

  return { error, handleChange };
}
