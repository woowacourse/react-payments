import { useState } from "react";
import { getPassWordErrorMessage } from "../utils/getPassWordErrorMessage";

export default function usePassWordNumberField(
  setPassWord: (value: string) => void,
  value: string,
) {
  const [inputError, setInputError] = useState<string | null>(null);
  const handleOnChange = (newValue: string) => {
    setInputError(null);
    setPassWord(newValue);
  };
  const handleOnBlur = () => {
    setInputError(getPassWordErrorMessage(value));
  };
  return { inputError, setInputError, handleOnChange, handleOnBlur };
}
