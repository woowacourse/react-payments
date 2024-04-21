import { useState } from "react";
import Validator from "../utils/Validator";
import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";

const useInput = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [inputError, setInputError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const validateStatus = Validator.inputCreditCardInfo(value, name);
    if (validateStatus === "error") return setInputError(true);
    if (validateStatus === "notValid") return;

    const validValue = name === CARD_INPUTBOX_NAME.owner.name ? value.toUpperCase() : value;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: validValue,
    }));

    setInputError(false);
  };

  return [inputValue, handleChange, inputError] as const;
};

export default useInput;
