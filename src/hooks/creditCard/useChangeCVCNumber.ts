import { useState } from 'react';

import useToggle from '@hooks/useToggle';

import { isContainsNonNumeric } from '@utils/number/number';

import { isValidCVCNumber } from '@domain/creditCard';

const useChangeCVCNumber = () => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [cvcError, setCVCError] = useState({ isError: false, errorMessage: '' });
  const [isCVCNumberCompleted, setIsCVCNumberCompleted] = useState(false);

  const handleChangeCVCNumber = (cvcNumber: string) => {
    if (isContainsNonNumeric(cvcNumber)) {
      setCVCError({ isError: true, errorMessage: '숫자만 입력 가능합니다.' });
      return;
    }

    setCVCError({ isError: false, errorMessage: '' });
    setCVCNumber(cvcNumber);

    if (isValidCVCNumber(cvcNumber)) setIsCVCNumberCompleted(true);
  };

  const { isToggle, handleToggle } = useToggle(false);

  return {
    isCVCNumberCompleted,
    cvcNumber,
    cvcError,
    isFocusedCVCNumber: isToggle,
    handleChangeCVCNumber,
    handleChangeCVCNumberFocus: handleToggle,
  };
};

export default useChangeCVCNumber;
