import useInput from "./useInput";
import { useState } from "react";
import { validateOnlyEnglishWithSpace } from "../domain/validateInput";

export default function useCardHolder() {
  const [errorMessage, setErrorMessage] = useState("");

  const useInputProps = {
    validator: (string: string) => {
      validateOnlyEnglishWithSpace(string);

      setErrorMessage("");
    },
    errorHandler: (error: unknown) => {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    },
    decorateValue: (string: string) => string.toUpperCase(),
  };

  const holderInput = useInput(useInputProps);

  return { holderInput, errorMessage };
}
