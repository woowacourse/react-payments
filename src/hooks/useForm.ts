import { useState } from 'react';

type ValidationType = { required: boolean; length?: number; errorMessage: string };
export type RegisterType<T extends Record<string, string>> = ReturnType<typeof useForm<T>>['register'];

export default function useForm<T extends Record<string, string>>({ defaultValues }: { defaultValues: T }) {
  const [value, setValue] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<T>(defaultValues);
  const [isValid, setIsValid] = useState(false);

  const register = (
    currentKey: keyof T,
    options?: {
      onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
      validation: ValidationType;
    },
  ) => {
    return {
      value: value[currentKey],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue((prev) => ({ ...prev, [currentKey]: e.target.value }));
        if (options?.validation) {
          setErrors((prev) => ({ ...prev, [currentKey]: validate(options.validation, e.target.value) }));

          setIsValid(
            Object.entries(value).every(
              ([key]) => validate(options.validation, currentKey === key ? e.target.value : value[key]) === '',
            ),
          );
        }

        options?.onChange?.(e);
      },
    };
  };

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
