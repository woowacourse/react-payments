import { useState } from 'react';
import { type ChangeEvent } from 'react';

interface Options<T> {
  initialValues: T;
}

export const useFormValues = <T>({ initialValues }: Options<T>) => {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return {
    values: formValues,
    onChange: handleChange,
  };
};
