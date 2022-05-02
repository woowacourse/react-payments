import { useCallback, useState } from "react";

export default function useValidatedUpdate(validation, setter) {
  const [errorMessage, setErrorMessage] = useState("");

  const resetError = () => setErrorMessage("");
  const eventHandler = useCallback(
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
    [validation, setter]
  );
  return [eventHandler, errorMessage, resetError];
}
