import { useState } from "react";
import { PasswordType, SetValueFn, UseHookReturn } from "../../types/CardInformationType";
import { PASSWORD_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { validateNumberOnly } from "../../utils/validation";
import useErrorCheckComplete from "../common/useErrorCheckComplete";
import { SingleErrorType } from "../../types";

const usePassword = (): UseHookReturn<"password"> => {
  const [password, setPasswordState] = useState<PasswordType>("");
  const [isError, setIsError] = useState<SingleErrorType>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setPassword: SetValueFn<PasswordType> = (value) => setPasswordState(value);

  const validateInput = (value: string) => {
    const { error, message } = validateNumberOnly(value);

    setIsError(error);

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
