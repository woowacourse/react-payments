import { useState } from 'react';
import { ValidationType } from './types';
import { validate } from './utils';

export default function useForm<T extends Record<string, string>>({ defaultValues }: { defaultValues: T }) {
  const [value, setValue] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<T>(defaultValues);

  const register = <E extends HTMLInputElement | HTMLSelectElement>(
    currentKey: keyof T,
    options?: {
      onChange?: (event: React.ChangeEvent<E>) => void;
      validation: ValidationType;
      inputRegex?: RegExp;
    },
  ) => {
    return {
      value: value[currentKey],
      onChange: (event: React.ChangeEvent<E>) => {
        if (options?.inputRegex && !options.inputRegex.test(event.target.value)) return;

        options?.onChange?.(event);
        setValue((prev) => ({ ...prev, [currentKey]: event.target.value }));

        if (options?.validation)
          setErrors((prev) => ({ ...prev, [currentKey]: validate(options.validation, event.target.value) }));
      },
    };
  };

  const isDirty = Object.values(errors).some((error) => error === '');
  const isAllDirty = Object.values(value).every((value) => value !== '');
  const isValid = isAllDirty && Object.values(errors).every((error) => error === '');

  return { value, errors, register, isValid, isDirty, isAllDirty };
}
