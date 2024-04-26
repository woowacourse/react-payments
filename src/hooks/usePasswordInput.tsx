import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface PasswordState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function usePasswordInput(): [PasswordState, (value: string) => void] {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handlePasswordChange = (value: string) => {
    const isPasswordValid = /^[0-9]*$/.test(value);

    const errorMessage = [validators.password(value)];
    const isValid = !!value && errorMessage[0] === "";
    const isNextVisible = passwordState.isNextVisible || isValid;

    setPasswordState((prevState) => ({
      ...prevState,
      errorMessage,
      isNextVisible,
      isValid,
    }));

    if (!isPasswordValid) return;

    setPasswordState((prevState) => ({
      ...prevState,
      value: value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [passwordState, handlePasswordChange];
}

export default usePasswordInput;
