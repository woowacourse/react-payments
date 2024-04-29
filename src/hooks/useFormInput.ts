import React, { useState } from "react";
import useInput from "./useInput";
import Validator from "../utils/Validator";
import { CreditCardAllValues, CreditCardSpecificValue } from "../@types/CreditCard";

const useFormInput = <T extends CreditCardSpecificValue>(initialValue: T) => {
  const [inputValue, handleInputChange] = useInput(initialValue);
  const [isError, setIsError] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { value, name } = e.target;

    const validateStatus = Validator.inputCreditCardInfo(value, name);
    if (validateStatus === "error") return setIsError(true);
    if (validateStatus === "notValid") return;

    handleInputChange(name, value);
    setIsError(false);

    if (Validator.inputIsFilled(value.length, name as keyof CreditCardAllValues))
      (e.target.nextSibling as HTMLElement)?.focus();
  };

  return [inputValue, handleFormChange, isError, setIsError] as const;
};

export default useFormInput;
