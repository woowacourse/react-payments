import { useState } from "react";
import { getCVCNumberErrorMessage } from "../utils/getCVCNumberErrorMessage";

export default function useCVCNumberField(
  setCVCNumber: (value: string) => void,
  value: string,
  onComplete: (isCompleted: boolean) => void,
) {
  const [inputError, setInputError] = useState<string | null>(null);
  const handleOnChange = (newValue: string) => {
    setInputError(null);
    setCVCNumber(newValue);
    onComplete(newValue.length === 3 && inputError === null);
  };
  const handleOnBlur = () => {
    if (value !== "") setInputError(getCVCNumberErrorMessage(value));
  };
  return { inputError, setInputError, handleOnChange, handleOnBlur };
}
