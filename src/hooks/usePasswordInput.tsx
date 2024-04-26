import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface PasswordState {
  value: number;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function usePasswordInput(): [PasswordState, (value: string) => void] {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    value: 0,
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handlePasswordChange = (value: string) => {
    const errorMessage = [validators.password(value)];
    const isValid = !!value && errorMessage[0] === "";
    const isNextVisible = passwordState.isNextVisible || isValid;

    setPasswordState((prevState) => ({
      ...prevState,
      value: isValid ? Number(value) : prevState.value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [passwordState, handlePasswordChange];
}

export default usePasswordInput;
