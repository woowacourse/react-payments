import { useEffect, useState } from "react";
import Validator from "../utils/Validator";
import { CreditCardAllValues, CreditCardSpecificValue } from "../@types/CreditCard";
import normalizeValue from "../utils/normalizeValue";

const useInput = <T extends CreditCardSpecificValue>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);
  const [isError, setIsError] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    setIsComplete(Validator.inputCreditCardIsComplete(inputValue));
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { value, name } = e.target;

    const validateStatus = Validator.inputCreditCardInfo(value, name);
    if (validateStatus === "error") return setIsError(true);
    if (validateStatus === "notValid") return;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (Validator.inputIsFilled(value.length, name as keyof CreditCardAllValues))
      (e.target.nextSibling as HTMLElement)?.focus();

    setIsError(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const newValue = normalizeValue(value, name);

    const validateStatus = Validator.blurCreditCardInfo(newValue, name);
    if (validateStatus === "notValid") return setIsError(true);

    setInputValue((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return [inputValue, handleChange, handleBlur, isError, isComplete] as const;
};

export default useInput;
