import useInput, { UseInputHookValue } from "./useInput";
import { validateLength, validateOnlyDigit } from "../domain/validateCardInfo";

import { useState } from "react";

export default function useCardNumbers() {
  const [errorMessage, setErrorMessage] = useState("");

  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 4);

      setErrorMessage("");
    },
    errorHandler: (error: unknown) => {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    },
  };

  const firstInput = useInput(useInputProps);
  const secondInput = useInput(useInputProps);
  const thirdInput = useInput(useInputProps);
  const fourthInput = useInput(useInputProps);

  const cardNumberInputs: [
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
  ] = [firstInput, secondInput, thirdInput, fourthInput];

  return { cardNumberInputs, errorMessage };
}
