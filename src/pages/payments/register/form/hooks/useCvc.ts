import { useState } from 'react';
import { type ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateCvc, preventCvc } from '../validator';

export const useCvc = () => {
  const { values, onChange, blur, onBlur, refs, ref, errors, valids, isValid, reset } = useFormValues({
    initialValues: { cvc: '' },
    validate: validateCvc,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (preventCvc(value)) {
      setInvalidAttemp({ ...invalidAttemp, [id]: true });
      return;
    } else {
      setInvalidAttemp({ ...invalidAttemp, [id]: false });
    }

    onChange(e);
  };

  const [invalidAttemp, setInvalidAttemp] = useState({ cvc: false });

  const renderErrorMessage = () => {
    if (invalidAttemp.cvc) return 'invalidAttemp';
    if (!blur.cvc) return '';

    const errorCvc = errors.cvc.filter((error) => !error.valid);
    if (errorCvc[0]) return errorCvc[0].message;
    return '';
  };

  return {
    values,
    onChange: handleChange,

    blur,
    onBlur,

    refs,
    ref,

    errors,
    valids,
    isValid,

    reset,

    invalidAttemp,
    renderErrorMessage,
  };
};
