import { NonBlockedInputError } from "../errors/InputError";
import { useState } from "react";

interface InputProps {
  initValue?: string;
  validator?: (value: string) => void;
  errorHandler?: (error: unknown) => void;
  decorateValue?: (value: string) => string;
}

export interface UseInputHookValue {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

export default function useInput({
  initValue = "",
  validator = () => {},
  errorHandler = () => {},
  decorateValue = (value: string) => value,
}: InputProps) {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeErrorHandler = (
    error: Error,
    eventTarget: EventTarget & HTMLInputElement
  ) => {
    eventTarget.setCustomValidity(error.message);
    setErrorMessage(error.message);
    errorHandler(error);

    if (error instanceof NonBlockedInputError) {
      setValue(decorateValue(eventTarget.value));
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validator(event.target.value);
      setErrorMessage("");
    } catch (error) {
      onChangeErrorHandler(error as Error, event.target);
      return;
    }

    event.target.setCustomValidity("");

    setValue(decorateValue(event.target.value));
  };

  return { value, errorMessage, onChangeHandler };
}
