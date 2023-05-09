import { Card } from 'components/common/Card/types';
import { validateExpirationDate } from './ValidateExpirationDate';
import { validateSecurityCode } from './ValidateSecurityCode';
import { validateCardNumbers } from './ValidateCardNumbers';
import { validatePassword } from './ValidatePassword';

export const isNumberLengthValid = (value: string, length: number) => {
  return value.replace(/ /g, '').length === length;
};

export function ValidateForm(card: Card): { isValid: boolean } {
  const { numbers, expirationDate, securityCode, password } = card;

  const isCardNumberValid = validateCardNumbers(numbers);

  const { isExpirationDateValid } = validateExpirationDate(expirationDate);

  const isSecurityCodeValid = validateSecurityCode(securityCode);

  const isPasswordValid = validatePassword(password.first, password.second);

  return {
    isValid: isCardNumberValid && isExpirationDateValid && isSecurityCodeValid && isPasswordValid,
  };
}
