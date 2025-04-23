import { useState } from "react";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import { useEachValidationType } from "../../types/useValidationType";

const useUniqueNumberValidation = (): useEachValidationType => {
  const [isError, setIsError] = useState<errorStateType>([false, false, false, false]);
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

  return { isError, errorMessage, validateInput };
};

export default useUniqueNumberValidation;
