import { useState } from "react";
import { validatePassword } from "../validator/validateCardInput";
import { getFirstErrorMessage } from "../validator/getFirstErrorMessage";

export function usePasswordInput(
  onSuccessValidate: (isValid: boolean) => void
) {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    const errorResult = validatePassword(password);
    const errorMessage = getFirstErrorMessage(errorResult, "PASSWORD");

    setFeedbackMessage(errorMessage);

    if (password.length === 2 && errorMessage === "") {
      onSuccessValidate(true);
    } else if (errorMessage !== "" || password.length < 2) {
      onSuccessValidate(false);
    }
  }

  return {
    feedbackMessage,
    onChangeHandler,
  };
}
