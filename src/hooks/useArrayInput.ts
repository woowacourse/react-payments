
import { createRef, useCallback, useMemo, useState, type ChangeEvent, type FocusEvent, type RefObject } from "react";
import type { ValidationRule } from "../types";
import { useIndexedSelectionRestore } from "./useSelectionRestore";

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

function replaceAt<T>(values: T[], index: number, value: T) {
  const newArray = [...values];
  newArray.splice(index, 1, value);
  return newArray;
}

function resizeErrors(errors: (string | null)[], length: number) {
  return Array.from({ length }, (_, index) => errors[index] ?? null);
}

export default function useArrayInput<T extends string | null>(
  initialValue: T[],
  options?: {
    validation?: (values: T[]) => ValidationRule[][],
    resolver?: (value: T[]) => T[]
  }
) {
  const [values, setValues] = useState(initialValue);
  const [storedErrors, setStoredErrors] = useState<(string | null)[]>(() => initialValue.map(() => null));
  const [isToucheds, setIsToucheds] = useState<boolean[]>(() => initialValue.map(() => false));
  const [refs] = useState<RefObject<HTMLInputElement | null>[]>(
    () => initialValue.map(() => createRef<HTMLInputElement>())
  );
  const saveSelection = useIndexedSelectionRestore(refs);

  const currentValidations = useMemo(
    () => options?.validation?.(values) ?? [],
    [options, values]
  );

  const errors = useMemo(() => {
    return values.map((value, index) => {
      return getError(value, currentValidations[index] ?? [], storedErrors[index]);
    })
  }, [currentValidations, values, storedErrors]);

  const error = useMemo(() => {
    return errors.find(err => err);
  }, [errors]);

  const isValid = useMemo(() =>
    values.every((value, index) =>
      isValidValue(value, currentValidations[index] ?? [])
    ), [currentValidations, values]);

  const register = useCallback(({ index }: { index: number }) => {
    return {
      ref: refs[index],
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const fieldValidations = currentValidations[index] ?? [];
        const failedValidation = findChangeBlockingValidation(fieldValidations, e.target.value, values[index]);

        if (failedValidation) {
          setStoredErrors(prev => {
            return replaceAt(prev, index, failedValidation.message);
          });
          return;
        }

        const resolver = options?.resolver;
        if (resolver) {
          const updatedValues = values.map((v, i) => (i === index ? e.target.value as T : v));
          const resolvedValues = resolver(updatedValues);
          setValues(resolvedValues as T[]);
          setStoredErrors(prev =>
            resizeErrors(prev, resolvedValues.length)
          );
          if (fieldValidations.every(v => v.validator(e.target.value))) {
            const nextRef = refs[index + 1];
            if (nextRef) {
              nextRef.current?.focus();
              return;
            }
          }
          saveSelection(index, e.target);
          return;
        }

        setValues(prev => {
          return replaceAt(prev, index, e.target.value as T);
        });
        setStoredErrors(prev => {
          return replaceAt(prev, index, null);
        });

        if (fieldValidations.every(validation => validation.validator(e.target.value))) {
          const nextRef = refs[index + 1];
          if (nextRef) nextRef.current?.focus();
        }
      },
      onBlur: (e: FocusEvent<HTMLInputElement>) => {
        if (!isToucheds[index]) setIsToucheds(prev => replaceAt(prev, index, true));
        const failedValidation = findFailedValidation(currentValidations[index] ?? [], e.target.value, "onBlur");
        setStoredErrors(prev => {
          return replaceAt(prev, index, failedValidation ? failedValidation.message : null);
        });
      }
    }
  }, [currentValidations, refs, values, options?.resolver, saveSelection, isToucheds])

  const isTouched = isToucheds.some(Boolean);

  return {
    values,
    errors,
    error,
    isValid,
    isToucheds,
    isTouched,
    refs,
    register
  };
}
