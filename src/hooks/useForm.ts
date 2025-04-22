import { useState } from 'react';

type ValidationType = { required: boolean; length?: number; errorMessage: string };

export default function useForm<T>({
  defaultValues,
  validation,
}: {
  defaultValues: T;
  validation: Record<keyof T, ValidationType>;
}) {
  const [value, setValue] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<T>(defaultValues);

  const register = (key: keyof T, options?: { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return {
      value: value[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, [key]: e.target.value }));
        setErrors((prev) => ({ ...prev, [key]: validate(validation[key], e.target.value) }));

        options?.onChange?.(e);
      },
    };
  };

  return { value, errors, register };
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
