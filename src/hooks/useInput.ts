
import { useCallback, useMemo, useRef, useState, type ChangeEvent, type FocusEvent } from "react";
import type { ValidationRule } from "../types";

export default function useInput<T extends string | null, E extends HTMLInputElement | HTMLSelectElement = HTMLInputElement>(
  initialValue: T,
  options?: {
    validation?: (value: T) => ValidationRule[],
  }
) {
  const [value, setValue] = useState(initialValue);
  const [storedError, setStoredError] = useState<string | null>(null);
  const ref = useRef(null);

  const currentValidations = useMemo(
    () => options?.validation?.(value) ?? [],
    [options, value]
  );

  const error = useMemo(() => {
    if (value) {
      const failed = currentValidations.find(
        rule => rule.type === 'onChange' && !rule.validator(value)
      );
      if (failed) return failed.message;
    }
    return storedError;
  }, [currentValidations, value, storedError]);

  const isValid = !!value && currentValidations.every(rule => rule.validator(value));

  const register = useCallback(() => {
    return {
      ref: ref,
      onChange: (e: ChangeEvent<E>) => {
        const failedValidation = currentValidations.find(
          (validation) => e.target.value.length && !value?.startsWith(e.target.value) && validation.type === 'onChange' && !validation.validator(e.target.value)
        );

        if (failedValidation) {
          setStoredError(failedValidation.message);
          return;
        }

        setValue(e.target.value as T);
        setStoredError(null);
      },
      onBlur: (e: FocusEvent<E>) => {
        const failedValidation = currentValidations.find(
          validation => validation.type === 'onBlur' && !validation.validator(e.target.value)
        );
        setStoredError(failedValidation ? failedValidation.message : null);
      }
    }
  }, [currentValidations, value])

  return {
    value,
    error,
    isValid,
    ref,
    register
  };
}
