import { useState } from "react";
import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";
import Validator from "../utils/Validator";

const useInput = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [isInputError, setIsInputError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const { isError, isValid } = Validator.inputCreditCardInfo(value, name);
    if (isError) return setIsInputError(true);
    if (!isValid) return;

    const validValue = name === CARD_INPUTBOX_NAME.owner.name ? value.toUpperCase() : value;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: validValue,
    }));

    setIsInputError(false);
  };

  return [inputValue, handleChange, isInputError] as const;
};

export default useInput;
