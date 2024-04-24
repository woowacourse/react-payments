import { limitNumberLength } from "@/utils/numberHelper";
import { ValidationStatus } from "@/utils/validation";
import { useEffect, useState } from "react";
import React from "react";

interface Props<T> {
  initialValue: T;
  validates: ((
    value: string[],
    currentName: string
  ) => { isValid: boolean; type: ValidationStatus } | null)[];
  maxNumberLength?: number;
}
//validation => all 둘 다 쓴다.
//index =>
//
const useInputs = <T extends object>({
  initialValue,
  validates,
  maxNumberLength,
}: Props<T>) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string | null }>({});
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let newValue = value;
    if (maxNumberLength) {
      newValue = limitNumberLength({
        value: value,
        maxLength: maxNumberLength,
      });
    }

    const newErrors = { ...errors };
    let allValid = true;

    validates.forEach((validate) => {
      const errorResult = validate([event.target.value], name);
      if (errorResult && !errorResult.isValid) {
        newErrors[name as keyof T] = errorResult.type;
        allValid = false;
      }
    });

    if (allValid) {
      newErrors[name as keyof T] = null;
    }

    setValues((values) => ({ ...values, [name]: newValue }));
    setErrors(newErrors);
  };

  useEffect(() => {}, [values]);

  return { values, errors, setErrors, onChange };
};

export default useInputs;
