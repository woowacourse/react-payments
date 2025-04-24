import { useState } from 'react';

type ValidationType = { required: boolean; length?: number; errorMessage: string };
export type RegisterType<T extends Record<string, string>> = ReturnType<typeof useForm<T>>['register'];

export default function useForm<T extends Record<string, string>>({ defaultValues }: { defaultValues: T }) {
  const [value, setValue] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<T>(defaultValues);

  const register = <E extends HTMLInputElement | HTMLSelectElement>(
    currentKey: keyof T,
    options?: {
      onChange?: (e: React.ChangeEvent<E>) => void;
      validation: ValidationType;
      inputRegex?: RegExp;
    },
  ) => {
    return {
      value: value[currentKey],
      onChange: (e: React.ChangeEvent<E>) => {
        if (options?.inputRegex && !options.inputRegex.test(e.target.value)) {
          return;
        }

        setValue((prev) => ({ ...prev, [currentKey]: e.target.value }));
        if (options?.validation) {
          setErrors((prev) => ({ ...prev, [currentKey]: validate(options.validation, e.target.value) }));
        }

        options?.onChange?.(e);
      },
    };
  };

  const isDirty = Object.values(value).every((value) => value !== '');
  const isValid = isDirty && Object.values(errors).every((error) => error === '');

  return { value, errors, register, isValid };
}

function validate(validation: ValidationType, value: string) {
  if (validation.required && !value) {
    return validation.errorMessage;
  }

  if (validation.length && value.length < validation.length) {
    return validation.errorMessage;
  }

  return '';
}
