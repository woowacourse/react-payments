import { useState } from "react";
import { getPasswordErrorMessage } from "../utils/getPasswordErrorMessage";

export default function usePasswordNumberField(
  setPassWord: (value: string) => void,
  value: string,
) {
  const [inputError, setInputError] = useState<string | null>(null);
  const handleOnChange = (newValue: string) => {
    setInputError(null);
    setPassWord(newValue);
  };
  const handleOnBlur = () => {
    setInputError(getPasswordErrorMessage(value));
  };
  return { inputError, setInputError, handleOnChange, handleOnBlur };
}
