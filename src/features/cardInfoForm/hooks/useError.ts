import { useMemo, useState } from "react";
import { NO_ERROR } from "../../../shared/constants/values";

type checkValidationType<T> = {
  length: number;
  value: string;
  type: keyof T;
};

type getValidationFnsType = (
  length: number,
  value: string
) => { condition: () => boolean; errorMsg: string }[];

type UseErrorProps<T> = {
  initError: T;
  getValidationFns: getValidationFnsType;
};

export default function useError<T extends {}>({
  initError,
  getValidationFns,
}: UseErrorProps<T>) {
  const [errorMessages, setErrorMessages] = useState<T>(initError);

  function checkValidation({ length, value, type }: checkValidationType<T>) {
    const validationFns = getValidationFns(length, value);
    const validation = validationFns.find((v) => v.condition());
    setErrorMessages((prev) => {
      return {
        ...prev,
        [type]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  const firstErrorMessage = useMemo(() => {
    for (const key in errorMessages) {
      const typedKey = key as keyof typeof errorMessages;
      if (errorMessages[typedKey] !== NO_ERROR) {
        return errorMessages[typedKey];
      }
    }
    return null;
  }, [errorMessages]);

  function getErrorMessage() {
    return firstErrorMessage;
  }

  function isError() {
    return !!firstErrorMessage;
  }

  return {
    errorMessages,
    checkValidation,
    firstErrorMessage: getErrorMessage(),
    isError: isError(),
  };
}
