import { useState } from "react";
import { NO_ERROR } from "../../../shared/constants/constant";

type checkValidationType<T> = {
  length: number;
  value: string;
  type: keyof T;
};

type getValidationFnsType = (
  length: number,
  value: string
) => { condition: () => boolean; errorMsg: string }[];

export default function useError<T extends {}>(
  initError: T,
  getValidationFns: getValidationFnsType
) {
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

  function getErrorMessage() {
    for (const key in error) {
      const typedKey = key as keyof typeof error;
      if (error[typedKey] !== NO_ERROR) {
        return error[typedKey];
      }
    }
  }

  return { error, checkValidation, getErrorMessage };
}
