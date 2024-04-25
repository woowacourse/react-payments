import { useEffect, useState } from "react";
import Validator from "../utils/Validator";
import CARD_INPUTBOX_NAME from "../constants/cardInputBoxName";
import { CreditCardSpecificValue } from "../@types/CreditCard";

const useInput = <T extends CreditCardSpecificValue>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [isError, setIsError] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => setIsComplete(Validator.inputCreditCardIsComplete(inputValue)), [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { value, name } = e.target;

    const validateStatus = Validator.inputCreditCardInfo(value, name);
    if (validateStatus === "error") return setIsError(true);
    if (validateStatus === "notValid") return;

    const validValue = name === CARD_INPUTBOX_NAME.owner.name ? value.toUpperCase() : value;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: validValue,
    }));

    setIsError(false);
  };

  return [inputValue, handleChange, isError, isComplete] as const;
};

export default useInput;
