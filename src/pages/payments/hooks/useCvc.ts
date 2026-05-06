import { useState } from 'react';
import { type ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';
import { isNumericString } from '@/core/utils/validator';

import { validateCvc } from '../validator';

export const useCvc = () => {
  const {
    values: { cvc },
    onChange,
    errors,
  } = useFormValues({
    initialValues: { cvc: '' },
    validate: validateCvc,
  });

  const [onBlurCvc, setOnBlurCvc] = useState(false);

  const [cvcInvalidAttemp, setCvcInvalidAttemp] = useState(false);

  const preventCvc = (cvc: string) => {
    if (cvc !== '' && !isNumericString(cvc)) return true;
    if (cvc.length > 3) return true;

    return false;
  };

  const renderErrorMessageCvc = () => {
    if (cvcInvalidAttemp) return '유효한 CVC(숫자)를 입력해주세요';
    if (!onBlurCvc) return '';

    const errorCvc = errors.cvc.filter((error) => !error.valid);
    if (errorCvc.length) {
      const errorType = errorCvc[0].type;
      if (errorType === 'isRequired') return 'CVC는 필수값입니다';
      if (errorType === 'isNumbericString') return 'CVC는 숫자여야합니다';
      if (errorType === 'min') return 'CVC는 3자리여야합니다';
      return '유효한 CVC(숫자)를 입력해주세요';
    }
    return '';
  };

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

  const handleBlurCvc = () => {
    setOnBlurCvc(true);
  };

  return {
    value: cvc,
    blurValue: onBlurCvc,
    invalidAttemp: cvcInvalidAttemp,
    prevent: preventCvc,
    renderErrorMessage: renderErrorMessageCvc,
    onChange: handleChangeCvc,
    onBlur: handleBlurCvc,
  };
};
