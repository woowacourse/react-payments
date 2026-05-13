import { useState } from "react";
import { getCvcNumberErrorMessage } from "../utils/getCvcNumberErrorMessage";

export default function useCvcNumberField(
  onChange: (value: string) => void,
  value: string,
  onComplete: (isCompleted: boolean) => void,
) {
  const [inputError, setInputError] = useState<string | null>(null);
  const handleOnChange = (newValue: string) => {
    setInputError(null);
    onChange(newValue);
    onComplete(getCvcNumberErrorMessage(newValue) === null);
  };
  const handleOnBlur = () => {
    if (value !== "") setInputError(getCvcNumberErrorMessage(value));
  };
  return { inputError, setInputError, handleOnChange, handleOnBlur };
}
