import { useMemo } from 'react';
import { CardNumberType, CvcType, ExpirationType, PasswordType } from '../types';

type UseFormValidParams = {
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  cvc: CvcType;
  password: PasswordType;
  company: string;
};

export const useFormValid = ({ cardNumbers, expiration, cvc, password, company }: UseFormValidParams) => {
  const isCardNumbersValid = useMemo(() => {
    return Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  }, [cardNumbers]);

  const isExpirationValid = useMemo(() => {
    return Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  }, [expiration]);

  const isCvcValid = useMemo(() => {
    return cvc.value.length === 3 && cvc.errorMessage === '';
  }, [cvc]);

  const isPasswordValid = useMemo(() => {
    return password.value.length === 2 && password.errorMessage === '';
  }, [password]);

  const isCompanyValid = useMemo(() => {
    return company !== '';
  }, [company]);

  const isFormValid = isCardNumbersValid && isExpirationValid && isCvcValid && isPasswordValid && isCompanyValid;

  return isFormValid;
};
