import { useState } from "react";
import { getFirstErrorMessage } from "../validator/getFirstErrorMessage";
import { validateCVC } from "../validator/validateCardInput";

export function useCVCInput(
  onSuccessValidate: (isValid: boolean) => void,
  onSuccessNextInput: () => void
) {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const errorResult = validateCVC(value);
    const errorMessage = getFirstErrorMessage(errorResult, "CVC");

    setFeedbackMessage(errorMessage);

    if (value.length === 3 && errorMessage === "") {
      onSuccessValidate(true);
      onSuccessNextInput();
    } else if (errorMessage !== "" || value.length !== 3) {
      onSuccessValidate(false);
    }
  }

  return {
    feedbackMessage,
    onChangeHandler,
  };
}
