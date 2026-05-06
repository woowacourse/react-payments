import { useState } from 'react';
import { type ChangeEvent } from 'react';

import type { ResultValid } from './validateFormValueRules';

interface Options<TFormValues> {
  initialValues: TFormValues;
  validate: (formValues: TFormValues) => { [formKey in keyof TFormValues]: ResultValid[] };
}

export const useFormValues = <TFormValues>({ initialValues, validate }: Options<TFormValues>) => {
  const [formValues, setFormValues] = useState<TFormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const errors = validate(formValues);

  return {
    values: formValues,
    onChange: handleChange,
    errors,
  };
};
