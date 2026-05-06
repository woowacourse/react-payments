import { useState } from 'react';
import { type ChangeEvent } from 'react';

interface Options<TFormValues> {
  initialValues: TFormValues;
  validate: (formValues: TFormValues) => boolean;
}

export const useFormValues = <TFormValues>({ initialValues, validate }: Options<TFormValues>) => {
  const [formValues, setFormValues] = useState<TFormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return {
    values: formValues,
    onChange: handleChange,
    validate,
  };
};
