import { useState } from 'react';
import { ExpirationKey, ExpirationType } from '../../types';
import { INITIAL_EXPIRATION } from '../../constants';
import focusNextInputIfFilled from '../../utils/focusNextInputIfFilled';
import { isNumber } from '../../utils/isNumber';
import { useExpirationRef } from './useExpirationRef';
import { validateExpiration } from '../../validation/validateExpiration';

export const useExpirationState = () => {
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);

  const expirationRef = useExpirationRef();

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    const errorMessage = validateExpiration(field, value);

    focusNextInputIfFilled({ refs: Object.values(expirationRef), maxLength: 2, value, currentIndex: Object.keys(expirationRef).indexOf(field) });

    if (!isNumber(value) && value !== '') {
      return;
    }

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
    }));
  };
  return { expiration, handleExpirationChange, expirationRef };
};
