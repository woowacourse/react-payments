import { createRef, useCallback, useMemo, useState, type ChangeEvent, type FocusEvent, type RefObject } from "react";
import type { ValidationRule } from "../types";

type ErrorState<T> = {
  [K in keyof T]: T[K] extends unknown[]
  ? (string | null)[]
  : string | null;
};

type Validations<T> = {
  [K in keyof T]: T[K] extends unknown[]
  ? ValidationRule[][]
  : ValidationRule[];
};

type RefsState<T> = {
  [K in keyof T]: T[K] extends unknown[]
  ? RefObject<HTMLElement>[]
  : RefObject<HTMLElement>;
};

export default function useForm<T extends Record<string, (string | null) | (string | null)[]>>({ initialValues, validations }: { initialValues: T, validations: Validations<T> }) {
  const [values, setValues] = useState<T>(initialValues);

  const [errors, setErrors] = useState<ErrorState<T>>(Object.entries(initialValues).reduce((prev, [fieldName, fieldValue]) => {
    return { ...prev, [fieldName]: Array.isArray(fieldValue) ? fieldValue.map(() => null) : null }
  }, {}) as ErrorState<T>);

  const [refs] = useState<RefsState<T>>(() => {
    return Object.entries(initialValues).reduce((prev, [fieldName, fieldValue]) => ({
      ...prev,
      [fieldName]: Array.isArray(fieldValue)
        ? fieldValue.map(() => createRef<HTMLElement>())
        : createRef<HTMLElement>(),
    }), {}) as RefsState<T>
  });

  const register = useCallback(<K extends keyof T, E extends HTMLInputElement | HTMLSelectElement = HTMLInputElement>(
    fieldName: K,
    ...args: T[K] extends unknown[]
      ? [option: { index: number; onComplete?: () => void }]
      : [option?: { onComplete?: () => void }]
  ) => {
    const option = (args as [{ index?: number; onComplete?: () => void }?])[0];
    const index = option?.index;
    const onComplete = option?.onComplete;

    if (typeof index === 'number') {
      const fieldValidations = (validations[fieldName] as ValidationRule[][])[index];
      return {
        ref: (refs[fieldName] as RefObject<HTMLElement>[])[index] as RefObject<E>,
        value: (values[fieldName] as (string | null)[])[index] ?? "",
        onChange: (event: ChangeEvent<E>) => {
          const failedValidation = fieldValidations.find(
            (validation) => event.target.value.length && validation.type === 'onChange' && !validation.validator(event.target.value),
          );

          if (failedValidation) {
            setErrors((prev) => {
              const newArray = [...prev[fieldName] as (string | null)[]];
              newArray.splice(index, 1, failedValidation.message ?? "");
              return { ...prev, [fieldName]: newArray };
            });
            return;
          }

          setValues((prev) => {
            const newArray = [...prev[fieldName] as string[]];
            newArray.splice(index, 1, event.target.value);
            return { ...prev, [fieldName]: newArray as T[K] };
          });
          setErrors((prev) => {
            const newArray = [...prev[fieldName] as (string | null)[]];
            newArray.splice(index, 1, null);
            return { ...prev, [fieldName]: newArray };
          });

          if (fieldValidations.every((v) => v.validator(event.target.value))) {
            const nextRef = (refs[fieldName] as RefObject<HTMLElement>[])[index + 1];
            if (nextRef) {
              nextRef.current?.focus();
            } else {
              onComplete?.();
            }
          }
        },
        onBlur: (event: FocusEvent<E>) => {
          const failedValidation = fieldValidations.find(
            (v) => event.target.value.length && v.type === 'onBlur' && !v.validator(event.target.value),
          );

          if (failedValidation) {
            setErrors((prev) => {
              const newArray = [...prev[fieldName] as (string | null)[]];
              newArray.splice(index, 1, failedValidation.message ?? "");
              return { ...prev, [fieldName]: newArray };
            });
            return;
          }

          setErrors((prev) => {
            const newArray = [...prev[fieldName] as (string | null)[]];
            newArray.splice(index, 1, null);
            return { ...prev, [fieldName]: newArray };
          });
        },
      };
    }

    const fieldValidations = validations[fieldName] as ValidationRule[];
    return {
      ref: refs[fieldName] as RefObject<E>,
      value: values[fieldName] as string | null ?? "",
      onChange: (event: ChangeEvent<E>) => {
        const failedValidation = fieldValidations.find(
          (v) => event.target.value.length && v.type === 'onChange' && !v.validator(event.target.value),
        );

        if (failedValidation) {
          setErrors((prev) => ({ ...prev, [fieldName]: failedValidation.message }));
          return;
        }

        setValues((prev) => ({ ...prev, [fieldName]: event.target.value }));
        setErrors((prev) => ({ ...prev, [fieldName]: null }));

        if (fieldValidations.every((v) => v.validator(event.target.value))) {
          onComplete?.();
        }
      },
      onBlur: (event: FocusEvent<E>) => {
        const failedValidation = fieldValidations.find(
          (v) => event.target.value.length && v.type === 'onBlur' && !v.validator(event.target.value),
        );

        if (failedValidation) {
          setErrors((prev) => ({ ...prev, [fieldName]: failedValidation.message }));
          return;
        }

        setErrors((prev) => ({ ...prev, [fieldName]: null }));
      },
    };
  }, [refs, validations, values]);

  const statuses = useMemo(() => {
    return Object.entries(values).reduce((prev, [fieldName, fieldValue]) => {
      const isArrayField = Array.isArray(fieldValue);
      return {
        ...prev,
        [fieldName]: {
          isValid: isArrayField
            ? fieldValue.map((el, index) => el && (validations[fieldName as keyof T] as ValidationRule[][])[index].every((v) => v.validator(el)))
            : fieldValue && (validations[fieldName as keyof T] as ValidationRule[]).every((v) => v.validator(fieldValue)),
        }
      };
    }, {});
  }, [validations, values]);

  const formStatus = useMemo(() => {
    return {
      isValid:
        Object.entries(statuses).every(([, fieldValue]) => {
          const { isValid } = fieldValue as { isValid: boolean | boolean[] };
          return Array.isArray(isValid) ? isValid.every((el) => el) : isValid;
        })
    }
  }, [statuses]);

  return {
    register,
    values,
    statuses,
    errors,
    formStatus,
    refs
  };
}
