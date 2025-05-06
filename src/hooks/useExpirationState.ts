import { useState } from 'react';
import { INITIAL_EXPIRATION } from '../constants';
import { ExpirationType } from '../types';
import { useRef } from 'react';
import { ExpirationKey } from '../types';
import focusNextInputIfFilled from '../utils/focusNextInputIfFilled';
import { validateExpiration } from '../validation/validateExpiration';

export const useExpirationState = () => {
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);
  return { expiration, setExpiration };
};

export const useExpirationFocus = () => {
  const expirationRef = {
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null)
  };

  const focusIfNeeded = (field: ExpirationKey, value: string) => {
    const refs = Object.values(expirationRef);
    const index = Object.keys(expirationRef).indexOf(field);

    focusNextInputIfFilled({
      refs,
      maxLength: 2,
      value,
      currentIndex: index
    });
  };

  return { expirationRef, focusIfNeeded };
};

export const useExpirationValidation = () => {
  const validate = (field: ExpirationKey, value: string) => {
    return validateExpiration(field, value);
  };
  return { validate };
};
