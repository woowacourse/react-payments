import { useMemo } from 'react';
import { CardNumberType, CvcType, ExpirationType, PasswordType } from '../types';
import { FIELD_LENGTH } from '../constants';

type UseFormValidParams = {
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  cvc: CvcType;
  password: PasswordType;
  company: string;
};

export const useFormValid = ({ cardNumbers, expiration, cvc, password, company }: UseFormValidParams) => {
  const isCardNumbersValid = useMemo(() => {
    return Object.values(cardNumbers).every(({ value, errorMessage }) => value.length === FIELD_LENGTH.cardNumber && errorMessage === '');
  }, [cardNumbers]);

  const isExpirationValid = useMemo(() => {
    return Object.values(expiration).every(({ value, errorMessage }) => value.length === FIELD_LENGTH.expiration && errorMessage === '');
  }, [expiration]);

  const isCvcValid = useMemo(() => {
    return cvc.value.length === FIELD_LENGTH.cvc && cvc.errorMessage === '';
  }, [cvc]);

  const isPasswordValid = useMemo(() => {
    return password.value.length === FIELD_LENGTH.password && password.errorMessage === '';
  }, [password]);

  const isCompanyValid = useMemo(() => {
    return company !== '';
  }, [company]);

  const isFormValid = isCardNumbersValid && isExpirationValid && isCvcValid && isPasswordValid && isCompanyValid;

  return isFormValid;
};
