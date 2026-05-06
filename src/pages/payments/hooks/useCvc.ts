import { useState } from 'react';
import { type ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';
import { isNumericString } from '@/core/utils/validator';

import { validateCvc } from '../validator';

export const useCvc = () => {
  const {
    values: { cvc },
    onChange,
    blur: { cvc: blurCvc },
    onBlur,
    errors,
  } = useFormValues({
    initialValues: { cvc: '' },
    validate: validateCvc,
  });

  const handleChangeCvc = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (preventCvc(value)) {
      setCvcInvalidAttemp(true);
      return;
    } else {
      setCvcInvalidAttemp(false);
    }

    onChange(e);
  };

  const [cvcInvalidAttemp, setCvcInvalidAttemp] = useState(false);

  const preventCvc = (cvc: string) => {
    if (cvc !== '' && !isNumericString(cvc)) return true;
    if (cvc.length > 3) return true;

    return false;
  };

  const renderErrorMessageCvc = () => {
    if (cvcInvalidAttemp) return '유효한 CVC(숫자)를 입력해주세요';
    if (!blurCvc) return '';

    const errorCvc = errors.cvc.filter((error) => !error.valid);
    if (errorCvc[0]) return errorCvc[0].message;
    return '';
  };

  return {
    value: cvc,
    onChange: handleChangeCvc,

    blurValue: blurCvc,
    onBlur,

    errors,

    invalidAttemp: cvcInvalidAttemp,
    prevent: preventCvc,
    renderErrorMessage: renderErrorMessageCvc,
  };
};
