import { CardNumberType, CvcType, ExpirationType, PasswordType } from '../types';

export const isFormValid = ({
  cardNumbers,
  expiration,
  cvc,
  password,
  company
}: {
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  cvc: CvcType;
  password: PasswordType;
  company: string;
}): boolean => {
  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  const isCvcValid = cvc.value.length === 3 && cvc.errorMessage === '';
  const isPasswordValid = password.value.length === 2 && password.errorMessage === '';
  const isCompanyValid = company !== '';

  return isCardNumbersValid && isExpirationValid && isCvcValid && isPasswordValid && isCompanyValid;
};
