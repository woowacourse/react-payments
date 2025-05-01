import { useState } from 'react';
import { CvcType } from '../types';
import { INITIAL_CVC } from '../constants';
import { isNumber } from '../utils/isNumber';
import { getCvcErrorMessage } from '../validation/validateCvc';

const useCvc = () => {
  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);

  const handleCvcChange = (value: string) => {
    const errorMessage = getCvcErrorMessage(value);
    if (!isNumber(value) && value.length !== 0) {
      return;
    }
    setCvc({ errorMessage, value });
  };

  return { cvc, handleCvcChange };
};

export default useCvc;
