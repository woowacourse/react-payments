
import { useCallback, useMemo, useRef, useState, type ChangeEvent, type FocusEvent } from "react";
import type { ValidationRule } from "../types";
import { useSelectionRestore } from "./useSelectionRestore";

function findFailedValidation(validations: ValidationRule[], value: string, type: ValidationRule["type"]) {
  return validations.find(
    validation => validation.type === type && !validation.validator(value)
  );
}

function findChangeBlockingValidation(validations: ValidationRule[], nextValue: string, previousValue: string | null) {
  return validations.find(
    validation =>
      nextValue.length &&
      !previousValue?.startsWith(nextValue) &&
      validation.type === "onChange" &&
      !validation.validator(nextValue)
  );
}

function getError(value: string | null, validations: ValidationRule[], storedError: string | null) {
  if (!value) return storedError;
  return findFailedValidation(validations, value, "onChange")?.message ?? storedError;
}

function isValidValue(value: string | null, validations: ValidationRule[]) {
  return !!value && validations.every(rule => rule.validator(value));
}

export default function useInput<T extends string | null, E extends HTMLInputElement | HTMLSelectElement = HTMLInputElement>(
  initialValue: T,
  options?: {
    validation?: (value: T) => ValidationRule[],
    resolver?: (value: string) => T,
  }
) {
  const [value, setValue] = useState(initialValue);
  const [storedError, setStoredError] = useState<string | null>(null);
  const ref = useRef<E | null>(null);
  const saveSelection = useSelectionRestore(ref);

  const currentValidations = useMemo(
    () => options?.validation?.(value) ?? [],
    [options, value]
  );

  const error = useMemo(
    () => getError(value, currentValidations, storedError),
    [currentValidations, value, storedError]
  );

  const isValid = isValidValue(value, currentValidations);

  const register = useCallback(() => {
    return {
      ref: ref,
      onChange: (e: ChangeEvent<E>) => {
        const failedValidation = findChangeBlockingValidation(currentValidations, e.target.value, value);

        if (failedValidation) {
          setStoredError(failedValidation.message);
          return;
        }

        const resolver = options?.resolver;

        if (resolver) {
          setValue(resolver(e.target.value));
          setStoredError(null);
          if (e.target instanceof HTMLInputElement) saveSelection(e.target);
          return;
        }

        setValue(e.target.value as T);
        setStoredError(null);
      },
      onBlur: (e: FocusEvent<E>) => {
        const failedValidation = findFailedValidation(currentValidations, e.target.value, "onBlur");
        setStoredError(failedValidation ? failedValidation.message : null);
      }
    }
  }, [currentValidations, value, options?.resolver, saveSelection])

  return {
    value,
    error,
    isValid,
    ref,
    register
  };
}
