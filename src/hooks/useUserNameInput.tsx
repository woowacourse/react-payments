import { useState, useCallback } from "react";
import validators from "../validators/newCardInputValidator";

interface UserNameState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useUserNameInput(): [UserNameState, (value: string) => void] {
  const [userNameState, setUserNameState] = useState<UserNameState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleUserNameChange = useCallback(
    (value: string) => {
      const errorMessage = [validators.userName(value)];
      const isValid = !!value && errorMessage[0] === "";
      const isNextVisible = userNameState.isNextVisible || isValid;

      setUserNameState((prevState) => ({
        ...prevState,
        value: isValid ? value.toUpperCase() : prevState.value,
        errorMessage,
        isNextVisible,
        isValid,
      }));
    },
    [userNameState]
  );

  return [userNameState, handleUserNameChange];
}

export default useUserNameInput;
