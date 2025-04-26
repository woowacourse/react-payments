import { useState } from "react";
import { errorStateType, ExpirationValidationType } from "../../types";
import { validateExpirationDate } from "../../utils/validation";
import { useEachValidationType } from "../../types/useValidationType";
import useErrorCheckComplete from "../useErrorCheckComplete";

const useExpirationDateValidation = (): useEachValidationType => {
  const [isError, setIsError] = useState<errorStateType>([false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (index: number, value: string) => {
    const type: ExpirationValidationType = index === 0 ? "MM" : "YY";
    const { error, message } = validateExpirationDate(type, value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isComplete = useErrorCheckComplete(isError);

  return { isError, isComplete, errorMessage, validateInput };
};

export default useExpirationDateValidation;
