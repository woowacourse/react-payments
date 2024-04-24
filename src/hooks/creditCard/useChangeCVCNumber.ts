import useToggle from '@hooks/useToggle';

import { isContainsNonNumeric } from '@utils/number';
import { useState } from 'react';

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

    if (cvcNumber.length === 3) setIsCVCNumberCompleted(true);
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
