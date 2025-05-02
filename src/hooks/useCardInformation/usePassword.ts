import { useState } from "react";
import { PasswordType, SetValueFn, UseHookReturn } from "../../types/CardInformationType";
import { PASSWORD_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { errorStateType } from "../../types";
import { validateNumberOnly } from "../../utils/validation";
import useErrorCheckComplete from "../common/useErrorCheckComplete";

const usePassword = (): UseHookReturn<"password"> => {
  const [password, setPasswordState] = useState<PasswordType>("");
  const [isError, setIsError] = useState<errorStateType>([false]);
  const [errorMessage, setErrorMessage] = useState("");

  const setPassword: SetValueFn<PasswordType> = (value) => setPasswordState(value);

  const validateInput = (value: string, index: number) => {
    const { error, message } = validateNumberOnly(value);

    setIsError((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isComplete = useCheckLengthComplete(password, PASSWORD_MAX_LENGTH);
  const isErrorComplete = useErrorCheckComplete(isError);

  return {
    state: password,
    setState: setPassword,
    validateInput,
    isError,
    errorMessage,
    isComplete,
    isErrorComplete,
  };
};

export default usePassword;
