import { NonBlockedInputError } from "../errors/InputError";
import { useState } from "react";

interface InputProps {
  validator: (string: string) => void;
  errorHandler: (error: unknown) => void;
  decorateValue?: (string: string) => string;
}

export default function useInput({
  validator,
  errorHandler,
  decorateValue = (string: string) => string,
}: InputProps) {
  const [value, setValue] = useState("");

  const onChangeErrorHandler = (
    error: Error,
    eventTarget: EventTarget & HTMLInputElement
  ) => {
    eventTarget.setCustomValidity(error.message);
    errorHandler(error);

    if (error instanceof NonBlockedInputError) {
      setValue(decorateValue(eventTarget.value));
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validator(event.target.value);
    } catch (error) {
      onChangeErrorHandler(error as Error, event.target);
      return;
    }

    event.target.setCustomValidity("");

    setValue(decorateValue(event.target.value));
  };

  return { value, onChangeHandler };
}
