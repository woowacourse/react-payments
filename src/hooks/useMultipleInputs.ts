import { useState } from "react";
import { InputValidator } from "../types/Validate";

const useMultipleInputs = (numberOfInputs: number, validator: InputValidator) => {
  const [inputValues, setInputValues] = useState(Array(numberOfInputs).fill(""));
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (inputIndex: number) => (inputValue: string) => {
    const { hasError, message } = validator?.(inputValue) ?? { hasError: false, message: "" };

    if (hasError) {
      setErrorMessage(message || "");
      return;
    }

    setInputValues((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[inputIndex] = inputValue;
      return updatedInputs;
    });
    setErrorMessage("");
  };

  return { inputValues, errorMessage, setErrorMessage, onChange };
};

export default useMultipleInputs;
