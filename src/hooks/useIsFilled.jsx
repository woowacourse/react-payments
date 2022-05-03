import {
  isFullNumber,
  isFullExpiryDate,
  isFullPassword,
  isFullPrivacyCode,
  isFullCompany,
} from 'page/cardAdd/validator';
import { useEffect, useState } from 'react';

const isFilledValidator = {
  company: { func: isFullCompany },
  cardNumber: { func: isFullNumber },
  expiryDate: { func: isFullExpiryDate },
  privacyCode: { func: isFullPrivacyCode },
  password: { func: isFullPassword },
};

const useIsFilled = (type, targetValue, initialState) => {
  const [isFilled, setIsFilled] = useState(initialState);

  useEffect(() => {
    if (isFilledValidator[type].func(targetValue)) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  }, [targetValue]);

  return [isFilled];
};

export default useIsFilled;
