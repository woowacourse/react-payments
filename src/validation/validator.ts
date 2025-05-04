import { FIELD_LENGTH } from '../constants';
import { CardNumberType, CvcType, ExpirationType, PasswordType } from '../types';

export const validateCardNumbers = (cardNumbers: CardNumberType) =>
  Object.values(cardNumbers).every(({ value, errorMessage }) => value.length === FIELD_LENGTH.cardNumber && !errorMessage);

export const validateExpiration = (expiration: ExpirationType) =>
  Object.values(expiration).every(({ value, errorMessage }) => value.length === FIELD_LENGTH.expiration && errorMessage === '');

export const validateCompany = (company: string) => company !== '';

export const validateCvc = (cvc: CvcType) => cvc.value.length === FIELD_LENGTH.cvc && cvc.errorMessage === '';

export const validatePassword = (password: PasswordType) => password.value.length === FIELD_LENGTH.password && password.errorMessage === '';
