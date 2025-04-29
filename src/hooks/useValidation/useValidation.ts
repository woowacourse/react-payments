import useExpirationDateValidation from "./useExpirationDateValidation";
import useCvcNumberValidation from "./useCvcNumberValidation";
import useUniqueNumberValidation from "./useUniqueNumberValidation";
import { isErrorCompletesType, useValidationType, validationFieldType } from "../../types/useValidationType";
import usePasswordValidation from "./usePasswordValidation";

const useValidation = (): useValidationType => {
  const uniqueNumber = useUniqueNumberValidation();
  const expirationDate = useExpirationDateValidation();
  const cvcNumber = useCvcNumberValidation();
  const password = usePasswordValidation();

  const validations = {
    uniqueNumber,
    expirationDate,
    cvcNumber,
    password,
  } as const;

  const validation = Object.fromEntries(
    Object.entries(validations).map(([key, { isError, errorMessage, validateInput }]) => {
      return [key, { isError, errorMessage, validateInput }];
    }),
  ) as validationFieldType;

  const isErrorCompletes = Object.fromEntries(
    Object.entries(validations).map(([key, { isComplete }]) => [key, isComplete]),
  ) as isErrorCompletesType;

  return {
    validation,
    isErrorCompletes,
  };
};

export default useValidation;
