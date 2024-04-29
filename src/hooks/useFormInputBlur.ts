import { useState } from "react";
import { CreditCardAllValues, CreditCardSpecificValue } from "../@types/CreditCard";
import Validator from "../utils/Validator";
import normalizeValue from "../utils/normalizeValue";
import useInput from "./useInput";

const useFormInputBlur = <T extends CreditCardSpecificValue>(initialValue: T) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newValue = normalizeValue(value, name);

    const validateStatus = Validator.blurCreditCardInfo(newValue, name);
    if (validateStatus === "notValid") return setIsError(true);

    handleInputChange(name, newValue);
  };

  return [inputValue, handleFormChange, handleBlur, isError] as const;
};

export default useFormInputBlur;
