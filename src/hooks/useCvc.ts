import { useState, useRef } from 'react';
import { CvcType } from '../types';
import { INITIAL_CVC } from '../constants';
import { isNumber } from '../utils/isNumber';

const useCvc = () => {
  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);

  const handleCvcChange = (value: string) => {
    const errorMessage = getCvcErrorMessage(value);
    if (!isNumber(value) && value.length !== 0) {
      return;
    }
    setCvc({ errorMessage, value });
  };

  const cvcRef = useRef<HTMLButtonElement>(null);
  return { cvc, handleCvcChange, cvcRef };
};

const getCvcErrorMessage = (value: string) => {
  if (value !== '' && value.length !== 3) {
    return 'CVC는 3자리여야 합니다.';
  }
  return '';
};
export default useCvc;
