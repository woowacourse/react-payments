import { useState } from 'react';

export type Errors<T, E> = {
  [K in keyof T]: T[K] extends unknown[] ? E[] : E;
};

export const useForm = <T extends object, E>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T, E>>(() => {
    const initialErrors = {} as Errors<T, E>;

    for (const key of Object.keys(initialValues) as Array<keyof T>) {
      const value = initialValues[key];
      initialErrors[key] = (Array.isArray(value) ? value.map(() => null) : null) as Errors<T, E>[typeof key];
    }

    return initialErrors;
  });

  const isFormValid = Object.values(errors).every((error) => {
    if (Array.isArray(error)) {
      return error.every((e) => !e);
    } else {
      return !error;
    }
  });

  const setFieldValue = <K extends keyof T>(
    field: K,
    value: T[K] extends unknown[] ? T[K][number] : T[K],
    index?: number,
  ) => {
    setValues((prev) => {
      const fieldValue = prev[field];

      if (Array.isArray(fieldValue) && typeof index === 'number') {
        const updatedFieldValue = [...fieldValue];
        updatedFieldValue[index] = value as string;
        return { ...prev, [field]: updatedFieldValue as T[K] };
      }

      return { ...prev, [field]: value as T[K] };
    });
  };

  const setFieldError = <K extends keyof T>(field: K, errorStatus: E, index?: number) => {
    setErrors((prev) => {
      const fieldError = prev[field];

      if (Array.isArray(fieldError) && typeof index === 'number') {
        const updatedFieldError = [...fieldError];
        updatedFieldError[index] = errorStatus;
        return { ...prev, [field]: updatedFieldError as Errors<T, E>[K] };
      }

      return { ...prev, [field]: errorStatus as Errors<T, E>[K] };
    });
  };

  return { values, errors, isFormValid, setFieldValue, setFieldError };
};
