import { useEffect } from 'react';
import { INPUT_MAX_LENGTH } from '../utils/Constants';

export const useFormValidation = (
  cardNumber: string[],
  expirationDate: string[],
  securityCode: string,
  password: string[],
  cardNumberError: string,
  expirationDateError: string,
  securityCodeError: string,
  passwordError: string,
  setButtonActive: (active: boolean) => void
) => {
  const isCardNumberValid = cardNumber.every(
    (numberValue) => numberValue.length === INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
  );
  const isExpirationDateValid = expirationDate.every(
    (dateValue) => dateValue.length === INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
  );
  const isSecurityCodeValid =
    securityCode.length === INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH;
  const isPasswordValid = password.every((passwordValue) => !!passwordValue);

  const isFormValid =
    isCardNumberValid &&
    isExpirationDateValid &&
    isSecurityCodeValid &&
    isPasswordValid &&
    !cardNumberError &&
    !expirationDateError &&
    !securityCodeError &&
    !passwordError;

  useEffect(() => {
    setButtonActive(isFormValid);
  }, [isFormValid]);
};
