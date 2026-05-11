import { useState } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validatePassword, preventPassword } from '../validator';

interface ChangeEvent {
  target: {
    id: string;
    value: unknown;
  };
}

export const usePassword = () => {
  const { values, onChange, blur, onBlur, refs, ref, errors, valids, isValid } = useFormValues({
    initialValues: { password: '' },
    validate: validatePassword,
  });

  const handleChange = (e: ChangeEvent) => {
    const { id, value } = e.target;

    if (preventPassword(value)) {
      setInvalidAttemp({ ...invalidAttemp, [id]: true });
      return;
    } else {
      setInvalidAttemp({ ...invalidAttemp, [id]: false });
    }

    onChange(e);
  };

  const [invalidAttemp, setInvalidAttemp] = useState({ password: false });

  const renderErrorMessage = () => {
    if (invalidAttemp.password) return '유효한 비밀번호를 입력해주세요';
    if (!blur.password) return '';

    const errorPassword = errors.password.filter((error) => !error.valid);
    if (errorPassword[0]) return errorPassword[0].message;
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

    invalidAttemp,
    renderErrorMessage,
  };
};
