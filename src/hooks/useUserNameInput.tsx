import { useState, useCallback } from "react";
import validators from "../validators/newCardInputValidator";

interface UserNameState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useUserNameInput(): [UserNameState, (value: string) => void, (e: React.KeyboardEvent<HTMLInputElement>) => void] {
  const [userNameState, setUserNameState] = useState<UserNameState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleUserNameChange = useCallback(
    (value: string) => {
      const errorMessage = [validators.userName(value)];

      setUserNameState((prevState) => ({
        ...prevState,
        value: value && !errorMessage[0] ? value.toUpperCase() : prevState.value,
        errorMessage,
      }));
    },
    [userNameState]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const isValid = !!userNameState.value && !userNameState.errorMessage[0];
        const isNextVisible = userNameState.isNextVisible || isValid;

        setUserNameState((prevState) => ({
          ...prevState,
          isValid,
          isNextVisible,
        }));
      }
    },
    [userNameState]
  );

  return [userNameState, handleUserNameChange, handleKeyDown];
}

export default useUserNameInput;
