import { ErrorStatus } from "@/utils/validation";
import { useEffect, useState } from "react";
import React from "react";

export type ValidateFuncWithPropsType = (
  value: string,
  currentName: string
) => { isValid: boolean; type: ErrorStatus } | null;

interface Props<T> {
  initialValue: T;
  validates: ValidateFuncWithPropsType[];
  maxNumberLength?: number;
  onChangeFunc?: (value: string) => string;
}

const useInputs = <T extends object>({
  initialValue,
  validates,
  onChangeFunc,
}: Props<T>) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string | null }>({});
  const [isError, setIsError] = useState(true);
  // const [isCurrentInputError, setIsCurrentInputError] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newValue = value;

    if (onChangeFunc) {
      event.target.value = onChangeFunc(newValue);
    }
    const newErrors = { ...errors };
    let allValid = true;

    validates.forEach((validate) => {
      const errorResult = validate(event.target.value, name);
      if (errorResult && !errorResult.isValid) {
        newErrors[name as keyof T] = errorResult.type;
        allValid = false;
      }
    });

    if (allValid) {
      delete newErrors[name as keyof T];
    }

    // setIsCurrentInputError(!allValid);
    setValues((values) => ({ ...values, [name]: newValue }));
    setErrors(newErrors);
  };

  useEffect(() => {
    if (
      !Object.keys(errors).length &&
      Object.values(values).every((value) => value)
    ) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [errors, values]);

  return {
    values,
    setValues,
    errors,
    onChange,
    isError,
    setErrors,
    // isCurrentInputError,
  };
};

export default useInputs;
