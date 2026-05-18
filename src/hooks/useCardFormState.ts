import { useState } from 'react';
import type { ErrorStatus, ExpirationPeriodErrorStatus } from '../types';
import type { FormValue } from './useAddCardForm';

const createInitialFormValue = (): FormValue => ({
  cardNumbers: { value: ['', '', '', ''], errorStatuses: [null, null, null, null, null] },
  cardCompany: { value: '', errorStatuses: [null] },
  expirationPeriod: { value: ['', ''], errorStatuses: [null, null, null] },
  cvc: { value: '', errorStatuses: [null] },
  password: { value: '', errorStatuses: [null] },
});

export default function useCardFormState() {
  const [formValue, setFormValue] = useState<FormValue>(createInitialFormValue);

  const updateValue = <K extends keyof FormValue>(key: K, value: FormValue[K]['value']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  const updateErrors = <K extends keyof FormValue>(key: K, errorStatuses: FormValue[K]['errorStatuses']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], errorStatuses },
    }));
  };

  const areAllFieldErrorsClear = Object.values(formValue).every((field) =>
    field.errorStatuses.every((status: ErrorStatus | ExpirationPeriodErrorStatus) => status === null),
  );

  return { formValue, setFormValue, updateValue, updateErrors, areAllFieldErrorsClear };
}
