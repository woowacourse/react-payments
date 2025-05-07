import { useState } from "react";
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
  const [error, setError] = useState<T>(initError);

  function checkValidation({ length, value, type }: checkValidationType<T>) {
    const validationFns = getValidationFns(length, value);
    const validation = validationFns.find((v) => v.condition());
    setError((prev) => {
      return {
        ...prev,
        [type]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  function findFirstError(errorObj: Record<string, string>) {
    for (const key in errorObj) {
      const typedKey = key as keyof typeof errorObj;
      if (errorObj[typedKey] !== NO_ERROR) {
        return { key: typedKey, value: errorObj[typedKey] };
      }
    }
    return null;
  }

  function getErrorMessage() {
    const result = findFirstError(error);
    return result?.value;
  }

  function isError() {
    return !!findFirstError(error);
  }

  return { error, checkValidation, getErrorMessage, isError };
}
