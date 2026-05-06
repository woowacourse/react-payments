import { useState } from 'react';

import { isNumericString } from '@/core/utils/validator';

import { validateCvc } from '../validator';

export const useCvc = () => {
  const [cvc, setCvc] = useState('');
  const [onBlurCvc, setOnBlurCvc] = useState(false);

  const [cvcInvalidAttemp, setCvcInvalidAttemp] = useState(false);

  const preventCvc = (cvc: string) => {
    if (cvc !== '' && !isNumericString(cvc)) return true;
    if (cvc.length > 3) return true;

    return false;
  };

  const renderErrorMessageCvc = (cvc: string) => {
    if (cvcInvalidAttemp) return '유효한 CVC(숫자)를 입력해주세요';
    if (!onBlurCvc) return '';
    if (!validateCvc(cvc)) return 'CVC를 전부 채워주세요';
    return '';
  };

  const handleChangeCvc = (value: string) => {
    if (preventCvc(value)) {
      setCvcInvalidAttemp(true);
      return;
    } else {
      setCvcInvalidAttemp(false);
    }

    setCvc(value);
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
