import { useEffect, useState } from 'react';

import {
  isFullNumber,
  isFullExpiryDate,
  isFullPassword,
  isFullPrivacyCode,
  isFullCompany,
  isFullCardAlias,
} from 'page/cardAddUpdate/validator';
import {
  COMPANY,
  CARD_NUMBER,
  EXPIRY_DATE,
  PRIVACY_CODE,
  PASSWORD,
  CARD_ALIAS,
} from 'constants/index';

const isFilledValidator: { [key: string]: { func: (value: any) => boolean } } = {
  [COMPANY]: { func: isFullCompany },
  [CARD_NUMBER]: { func: isFullNumber },
  [EXPIRY_DATE]: { func: isFullExpiryDate },
  [PRIVACY_CODE]: { func: isFullPrivacyCode },
  [PASSWORD]: { func: isFullPassword },
  [CARD_ALIAS]: { func: isFullCardAlias },
};

const useIsFilled = (type: string, targetValue: number | string, initialState: boolean) => {
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
