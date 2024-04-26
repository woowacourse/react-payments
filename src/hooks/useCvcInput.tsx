import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface CvcState {
  value: number;
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCvcInput(): [CvcState, (value: string) => void] {
  const [cvcState, setCvcState] = useState<CvcState>({
    value: 0,
    errorMessage: [""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCvcChange = (value: string) => {
    const errorMessage = [validators.cvc(value)];
    const isValid = !!value && errorMessage[0] === "";
    const isNextVisible = cvcState.isNextVisible || isValid;

    setCvcState((prevState) => ({
      ...prevState,
      value: isValid ? Number(value) : prevState.value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [cvcState, handleCvcChange];
}

export default useCvcInput;
