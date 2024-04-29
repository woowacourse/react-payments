import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface UserNameState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}
interface UseUserNameInputResult {
  UserNameState: UserNameState;
  handleUserNameChange: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
}

function useUserNameInput(): UseUserNameInputResult {
  const [userNameState, setUserNameState] = useState<UserNameState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleUserNameChange = (value: string) => {
    const userNameValid = /^[a-zA-Z\s]*$/.test(value);
    const errorMessage = [validators.userName(value)];
    const isValid = !!value && !errorMessage[0];

    setUserNameState((prevState) => ({
      ...prevState,
      value: userNameValid ? value.toUpperCase() : prevState.value,
      errorMessage,
      isValid,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateValidationState();
    }
  };

  const handleBlur = () => {
    updateValidationState();
  };

  const updateValidationState = () => {
    const isValid = !!userNameState.value && !userNameState.errorMessage[0];
    const isNextVisible = userNameState.isNextVisible || isValid;

    setUserNameState((prevState) => ({
      ...prevState,
      isValid,
      isNextVisible,
    }));
  };

  return { UserNameState: userNameState, handleUserNameChange, handleKeyDown, handleBlur };
}

export default useUserNameInput;
