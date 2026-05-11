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
  const {
    values: { password },
    onChange,
    blur: { password: blurPassword },
    onBlur,
    refs,
    ref,
    errors,
    valids,
    isValid,
  } = useFormValues({
    initialValues: { password: '' },
    validate: validatePassword,
  });

  const handleChangePassword = (e: ChangeEvent) => {
    const { value } = e.target;

    if (preventPassword(value)) {
      setPasswordInvalidAttemp(true);
      return;
    } else {
      setPasswordInvalidAttemp(false);
    }

    onChange(e);
  };

  const [passwordInvalidAttemp, setPasswordInvalidAttemp] = useState(false);

  const renderErrorMessagePassword = () => {
    if (passwordInvalidAttemp) return '유효한 비밀번호를 입력해주세요';
    if (!blurPassword) return '';

    const errorPassword = errors.password.filter((error) => !error.valid);
    if (errorPassword[0]) return errorPassword[0].message;
    return '';
  };

  return {
    value: password,
    onChange: handleChangePassword,

    blurValue: blurPassword,
    onBlur,

    refs,
    ref,

    errors,
    valids,
    isValid,

    invalidAttemp: passwordInvalidAttemp,
    renderErrorMessage: renderErrorMessagePassword,
  };
};
