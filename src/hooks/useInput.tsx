import React, { useState } from "react";

import { NonBlockedInputError } from "../errors/InputError";

interface InputProps {
  initValue?: string;
  validator?: (value: string) => void;
  onFocus?: () => void;
  checkComplete?: (value: string) => boolean;
  errorHandler?: (error: unknown) => void;
  decorateValue?: (value: string) => string;
}

export interface PropsWithOnFocus {
  onFocus: () => void;
}

export interface UseInputHookValue {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusHandler: () => void;
  errorMessage: string;
  isComplete: boolean;
  setIsComplete?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useInput({
  initValue = "",
  onFocus = () => {},
  validator = () => {},
  errorHandler = () => {},
  checkComplete = () => true,
  decorateValue = (value: string) => value,
}: InputProps) {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);

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
      setIsComplete(false);
      onChangeErrorHandler(error as Error, event.target);
      return;
    }

    event.target.setCustomValidity("");

    setValue(decorateValue(event.target.value));

    if (checkComplete(event.target.value)) {
      setIsComplete(true);
      return;
    }
  };

  const onFocusHandler = () => {
    onFocus();
  };

  return {
    value,
    errorMessage,
    isComplete,
    onChangeHandler,
    onFocusHandler,
    setIsComplete,
  };
}
