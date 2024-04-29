import { ErrorStatus } from "@/utils/validation";
import { useEffect, useState } from "react";
import React from "react";

export type ValidateFuncWithPropsType = (
  value: string,
  currentName: string
) => { isValid: boolean; type?: ErrorStatus } | null;

export type InputChangeCallbackType = (value: string) => string;
interface Props<T> {
  initialValue: T;
  validates: ValidateFuncWithPropsType[];
  inputChangeCallbacks?: InputChangeCallbackType[];
}

const useInputs = <T extends object>({
  initialValue,
  validates,
  inputChangeCallbacks,
}: Props<T>) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});
  const [isValidated, setIsValidated] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let newValue = value;

    if (inputChangeCallbacks) {
      inputChangeCallbacks.forEach((inputChangeCallbacks) => {
        newValue = inputChangeCallbacks(newValue);
      });
    }

    const newErrors = { ...errors };
    let allValid = true;

    setValues((values) => ({ ...values, [name]: newValue }));

    validates.forEach((validate) => {
      const errorResult = validate(newValue, name);
      if (errorResult && !errorResult.isValid) {
        newErrors[name as keyof T] = errorResult.type;
        allValid = false;
      }
    });

    if (allValid) {
      delete newErrors[name as keyof T];
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    if (
      !Object.keys(errors).length &&
      Object.values(values).every((value) => value)
    ) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [errors, values]);

  return {
    values,
    setValues,
    errors,
    onChange,
    isValidated,
    setErrors,
  };
};

export default useInputs;
