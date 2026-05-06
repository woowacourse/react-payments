import { useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';

import type { ResultValid } from './validateFormValueRules';

interface Options<TFormValues> {
  initialValues: TFormValues;
  validate: (formValues: TFormValues) => { [formKey in keyof TFormValues]: ResultValid[] };
}

type FormTouched<TFormValues> = {
  [formKey in keyof TFormValues]: boolean;
};

export const useFormValues = <TFormValues extends Record<string, string>>({
  initialValues,
  validate,
}: Options<TFormValues>) => {
  const [formValues, setFormValues] = useState<TFormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [blur, setBlur] = useState(() =>
    Object.keys(initialValues).reduce((acc, key) => {
      return { ...acc, [key]: false };
    }, {} as FormTouched<TFormValues>),
  );

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setBlur((prev) => ({ ...prev, [e.target.id]: true }));
  };

  const errors = validate(formValues);

  return {
    values: formValues,
    onChange: handleChange,
    blur,
    onBlur: handleBlur,
    errors,
  };
};
