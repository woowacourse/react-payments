import { useState } from "react";
import Validator from "../utils/Validator";

const useInput = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [inputError, setInputError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const { isError, isValid } = Validator.inputCreditCardInfo(value, name);
    if (isError) return setInputError(true);
    if (!isValid) return;

    const validValue = name === "name" ? value.toUpperCase() : value;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: validValue,
    }));

    setInputError(false);
  };

  return [inputValue, handleChange, inputError] as const;
};

export default useInput;
