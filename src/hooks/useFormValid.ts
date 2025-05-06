import { useMemo } from 'react';
import { CardCompanyType, CardNumberType, CvcType, ExpirationType, PasswordType } from '../types';
import { validateCardNumbers, validateCompany, validateCvc, validateExpiration, validatePassword } from '../validation/validator';

type UseFormValidParams = {
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  cvc: CvcType;
  password: PasswordType;
  company: CardCompanyType | null;
};

export const useFormValid = ({ cardNumbers, expiration, cvc, password, company }: UseFormValidParams) => {
  const isCardNumbersValid = useMemo(() => {
    return validateCardNumbers(cardNumbers);
  }, [cardNumbers]);

  const isExpirationValid = useMemo(() => {
    return validateExpiration(expiration);
  }, [expiration]);

  const isCvcValid = useMemo(() => {
    return validateCvc(cvc);
  }, [cvc]);

  const isPasswordValid = useMemo(() => {
    return validatePassword(password);
  }, [password]);

  const isCompanyValid = useMemo(() => {
    if (company) {
      return validateCompany(company);
    }
  }, [company]);

  const isFormValid = isCardNumbersValid && isExpirationValid && isCvcValid && isPasswordValid && isCompanyValid;

  return isFormValid;
};
