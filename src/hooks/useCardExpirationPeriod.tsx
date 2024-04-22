import useInput, { UseInputHookValue } from "./useInput";
import {
  validateLength,
  validateMonth,
  validateYear,
} from "../domain/validateCardInfo";

import { useState } from "react";

export default function useCardExpirationPeriod() {
  const [errorMessage, setErrorMessage] = useState("");

  const printErrorMessage = (error: unknown) => {
    if (!(error instanceof Error)) return;
    setErrorMessage(error.message);
  };

  const monthInputProps = {
    validator: (string: string) => {
      validateMonth(string);
      validateLength(string, 2);

      setErrorMessage("");
    },
    errorHandler: printErrorMessage,
  };

  const yearInputProps = {
    validator: (string: string) => {
      validateYear(string);
      validateLength(string, 2);

      setErrorMessage("");
    },
    errorHandler: printErrorMessage,
  };

  const monthInput = useInput(monthInputProps);
  const yearInput = useInput(yearInputProps);
  const expirationPeriodInputs: [UseInputHookValue, UseInputHookValue] = [
    monthInput,
    yearInput,
  ];

  return { expirationPeriodInputs, errorMessage };
}
