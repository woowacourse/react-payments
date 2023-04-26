import { useState } from "react";

const useMultipleInputs = (numberOfInputs: number, validator: (inputValue: string) => void) => {
  const [inputValues, setInputValues] = useState(Array(numberOfInputs).fill(""));
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    try {
      validator(inputValue);

      setInputValues((prevInputs) => {
        const updatedInputs = [...prevInputs];
        updatedInputs[inputIndex] = inputValue;
        return updatedInputs;
      });
      setErrorMessage("");
    } catch (error) {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    }
  };

  return { inputValues, errorMessage, setErrorMessage, onChange };
};

export default useMultipleInputs;
