import type { Bank } from '@/entities/card/model/bank';
import { validateCardNumber } from '@/entities/card/model/cardNumber';
import { validateCvc } from '@/entities/card/model/cvc';
import type { ExpiryDate } from '@/entities/card/model/expiryDate';
import { validateExpiryMonth, validateExpiryYear } from '@/entities/card/model/expiryDate';
import { validatePassword } from '@/entities/card/model/password';
import { type CardInfo } from '@/features/registerCard/model/registerCardForm';
import { useState } from 'react';
import type { CardNumberFieldControl } from '../ui/fields/CardNumberField';
import type { ExpiryFieldControl } from '../ui/fields/ExpiryDateField';
import type { BankFieldControl } from '../ui/fields/BankSelectField';
import type { CvcFieldControl } from '../ui/fields/CvcField';
import type { PasswordFieldControl } from '../ui/fields/PasswordField';

export interface UsePaymentsFormResult {
  cardInfo: CardInfo;
  isFormValid: boolean;
  numbersField: CardNumberFieldControl;
  expiryField: ExpiryFieldControl;
  bankField: BankFieldControl;
  cvcField: CvcFieldControl;
  passwordField: PasswordFieldControl;
}

export const usePaymentsForm = (initalValue: CardInfo): UsePaymentsFormResult => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initalValue);

  const { numbers, expiryDate, cvc, password, bank } = cardInfo;

  const handleChangeNumbers = (value: string[]) => {
    setCardInfo((prev) => ({ ...prev, numbers: value }));
  };

  const handleChangeExpiryDate = (value: ExpiryDate) => {
    setCardInfo((prev) => ({ ...prev, expiryDate: value }));
  };

  const handleChangeBank = (value: Bank | undefined) => {
    setCardInfo((prev) => ({ ...prev, bank: value }));
  };

  const handleChangeCvc = (value: string) => {
    setCardInfo((prev) => ({ ...prev, cvc: value }));
  };

  const handleChangePassword = (value: string) => {
    setCardInfo((prev) => ({ ...prev, password: value }));
  };

  const numbersField: CardNumberFieldControl = {
    numbers,
    shouldComplete: (value: string[]) => validateCardNumber(value.join('')),
    onChange: handleChangeNumbers,
  };

  const expiryField: ExpiryFieldControl = {
    expiryDate,
    shouldComplete: (value: ExpiryDate) =>
      validateExpiryMonth(value.month) && validateExpiryYear(value.year),
    onChange: handleChangeExpiryDate,
  };

  const bankField: BankFieldControl = {
    bank,
    shouldComplete: (value: Bank | undefined) => value !== undefined,
    onChange: handleChangeBank,
  };

  const cvcField: CvcFieldControl = {
    cvc,
    shouldComplete: (value: string) => validateCvc(value),
    onChange: handleChangeCvc,
  };

  const passwordField: PasswordFieldControl = {
    password,
    shouldComplete: (value: string) => validatePassword(value),
    onChange: handleChangePassword,
  };

  const isNumbersValid = validateCardNumber(numbers.join(''));
  const isExpiryValid =
    validateExpiryMonth(expiryDate.month) && validateExpiryYear(expiryDate.year);
  const isBankValid = bank !== undefined;
  const isCvcValid = validateCvc(cvc);
  const isPasswordValid = validatePassword(password);

  const isFormValid =
    isNumbersValid && isExpiryValid && isBankValid && isCvcValid && isPasswordValid;

  return {
    cardInfo,
    isFormValid,
    numbersField,
    expiryField,
    bankField,
    cvcField,
    passwordField,
  };
};
