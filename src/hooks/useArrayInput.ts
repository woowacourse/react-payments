
import { createRef, useCallback, useMemo, useState, type ChangeEvent, type FocusEvent } from "react";
import type { ValidationRule } from "../types";

export default function useArrayInput<T extends string | null>(
  initialValue: T[],
  options?: {
    validation?: (values: T[]) => ValidationRule[][],
  }
) {
  const [values, setValues] = useState(initialValue);
  const [storedErrors, setStoredErrors] = useState<(string | null)[]>(() => initialValue.map(() => null));
  const [refs] = useState(() => initialValue.map(() => createRef<HTMLInputElement>()))

  const currentValidations = useMemo(
    () => options?.validation?.(values) ?? [],
    [options, values]
  );

  const errors = useMemo(() => {
    return values.map((value, index) => {
      if (value) {
        const failed = (currentValidations[index] ?? []).find(
          rule => rule.type === 'onChange' && !rule.validator(value)
        );
        if (failed) return failed.message;
      }
      return storedErrors[index];
    })
  }, [currentValidations, values, storedErrors]);

  const error = useMemo(() => {
    return errors.find(err => err);
  }, [errors]);

  const isValid = useMemo(() =>
    values.every((value, index) =>
      !!value && (currentValidations[index] ?? []).every(rule => rule.validator(value ?? ''))
    ), [currentValidations, values]);

  const register = useCallback(({ index }: { index: number }) => {
    return {
      ref: refs[index],
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const failedValidation = (currentValidations[index] ?? []).find(
          (validation) => e.target.value.length && !values[index]?.startsWith(e.target.value) && validation.type === 'onChange' && !validation.validator(e.target.value)
        );

        if (failedValidation) {
          setStoredErrors(prev => {
            const newArray = [...prev];
            newArray.splice(index, 1, failedValidation.message);
            return newArray;
          });
          return;
        }

        setValues(prev => {
          const newArray = [...prev];
          newArray.splice(index, 1, e.target.value as T);
          return newArray;
        });
        setStoredErrors(prev => {
          const newArray = [...prev];
          newArray.splice(index, 1, null);
          return newArray;
        });

        if (currentValidations[index]?.every(validation => validation.validator(e.target.value))) {
          const nextRef = refs[index + 1];
          if (nextRef) nextRef.current?.focus();
        }
      },
      onBlur: (e: FocusEvent<HTMLInputElement>) => {
        const failedValidation = (currentValidations[index] ?? []).find(
          validation => validation.type === 'onBlur' && !validation.validator(e.target.value)
        );
        setStoredErrors(prev => {
          const newArray = [...prev];
          newArray.splice(index, 1, failedValidation ? failedValidation.message : null);
          return newArray;
        });
      }
    }
  }, [currentValidations, refs, values])

  return {
    values,
    errors,
    error,
    isValid,
    refs,
    register
  };
}
