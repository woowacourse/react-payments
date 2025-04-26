import { useState } from "react";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import { useEachValidationType } from "../../types/useValidationType";
import useCheckComplete from "./useCheckComplete";

const usePasswordValidation = (): useEachValidationType => {
  const [isError, setIsError] = useState<errorStateType>([false]);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (index: number, value: string) => {
    const { error, message } = validateNumberOnly(value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isComplete = useCheckComplete(isError);

  return { isError, isComplete, errorMessage, validateInput };
};

export default usePasswordValidation;
