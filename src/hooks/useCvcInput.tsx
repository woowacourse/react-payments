import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface CvcState {
  value: string;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCvcInput(): [CvcState, (value: string) => void] {
  const [cvcState, setCvcState] = useState<CvcState>({
    value: "",
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCvcChange = (value: string) => {
    const isCvcValid = /^[0-9]*$/.test(value);

    const errorMessage = [validators.cvc(value)];
    const isValid = !!value && errorMessage[0] === "";
    const isNextVisible = cvcState.isNextVisible || isValid;

    setCvcState((prevState) => ({
      ...prevState,
      errorMessage,
      isNextVisible,
      isValid,
    }));

    if (!isCvcValid) return;

    setCvcState((prevState) => ({
      ...prevState,
      value: value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [cvcState, handleCvcChange];
}

export default useCvcInput;
