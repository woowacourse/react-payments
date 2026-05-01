import { useState, type Dispatch, type SetStateAction } from "react";
import { validateNumber, validateMonth } from "./validator";

export function useExpireDate(
  expireDate: string[],
  setExpireDate: Dispatch<SetStateAction<string[]>>,
) {
  const [expireDateError, setExpireDateError] = useState("");

  const handleExpireDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    setExpireDateError("");

    const numberErrorResult = validateNumber(newValue);

    if (!numberErrorResult.state) {
      setExpireDateError(numberErrorResult.message);
      return;
    }

    const monthErrorResult = validateMonth(index, newValue);
    if (!monthErrorResult.state) {
      setExpireDateError(monthErrorResult.message);
    }

    setExpireDate(() => {
      const newArray = [...expireDate];
      newArray[index] = newValue;
      return newArray;
    });
  };

  return { expireDateError, handleExpireDate };
}
