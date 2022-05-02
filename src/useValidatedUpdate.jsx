import { useState } from "react";

export default function useValidatedUpdate(validation, setter, errorHandler) {
  const [errorMessage, setErrorMessage] = useState("");

  const resetError = () => setErrorMessage("");

  return [
    (event, order) => {
      const {
        target: { value },
      } = event;

      const { testFunc, errorMessage } = validation;

      if (!testFunc(value, order)) {
        setErrorMessage(errorMessage);
        return;
      }

      resetError();

      setter(value, order);
    },
    errorMessage,
    resetError,
  ];
}
