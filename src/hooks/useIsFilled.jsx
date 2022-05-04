import { useEffect, useState } from 'react';
import {
  isFullNumber,
  isFullExpiryDate,
  isFullPassword,
  isFullPrivacyCode,
  isFullCompany,
  isFullCardAlias,
} from 'page/cardAdd/validator';
import { COMPANY, CARD_NUMBER, EXPIRY_DATE, PRIVACY_CODE, PASSWORD, CARD_ALIAS } from 'constants';

const isFilledValidator = {
  [COMPANY]: { func: isFullCompany },
  [CARD_NUMBER]: { func: isFullNumber },
  [EXPIRY_DATE]: { func: isFullExpiryDate },
  [PRIVACY_CODE]: { func: isFullPrivacyCode },
  [PASSWORD]: { func: isFullPassword },
  [CARD_ALIAS]: { func: isFullCardAlias },
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
