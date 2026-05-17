import { validateCardNumber } from '@/entities/card/model/cardNumber';
import { validateCvc } from '@/entities/card/model/cvc';
import { validateExpiryMonth, validateExpiryYear } from '@/entities/card/model/expiryDate';
import { validatePassword } from '@/entities/card/model/password';
import type { FieldData } from '../model/payments';

export const validateFieldData = (fields: FieldData): boolean => {
  const { numbers, expiryDate, bank, cvc, password } = fields;

  const isNumbersValid = validateCardNumber(numbers) === undefined;
  const isValidMonth = validateExpiryMonth(expiryDate.month) == undefined;
  const isValidYear = validateExpiryYear(expiryDate.year) === undefined;
  const isValidBank = bank !== undefined;
  const isValidCvc = validateCvc(cvc);
  const isValidPassword = validatePassword(password);

  return (
    isNumbersValid && isValidMonth && isValidYear && isValidBank && isValidCvc && isValidPassword
  );
};
