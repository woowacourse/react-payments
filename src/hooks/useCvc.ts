import { useState } from 'react';
import { CvcType } from '../types';
import { INITIAL_CVC } from '../constants';

const useCvc = () => {
  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);

  const handleCvcChange = (value: string) => {
    const errorMessage = getCvcErrorMessage(value);
    setCvc({ errorMessage, value });
  };

  return { cvc, handleCvcChange };
};

const getCvcErrorMessage = (value: string) => {
  if (!/^[0-9]*$/.test(value)) {
    return '숫자만 입력 가능합니다.';
  }
  if (value !== '' && value.length !== 3) {
    return 'CVC는 3자리여야 합니다.';
  }
  return '';
};
export default useCvc;
