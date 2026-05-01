import { useState, type Dispatch, type SetStateAction } from "react";
import { validateNumber } from "./validator";

export function useInputHandle(
  inputValue: string[],
  setInputValue: Dispatch<SetStateAction<string[]>>,
) {
  const [error, setError] = useState("");

  const handleNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    const numberErrorResult = validateNumber(newValue);

    if (!numberErrorResult.state) {
      setError(numberErrorResult.message);
      return;
    }

    setError("");

    setInputValue(() => {
      const newArray = [...inputValue];
      newArray[index] = newValue;
      return newArray;
    });
  };

  return { error, handleNumber };
}
