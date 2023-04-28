import { CreditCard } from 'types';
import creditCardCompanies from '../assets/data/creditCardCompanies';
import {
  validateCVC, validateExpiry, validateNumber, validatePassword
} from './validations';

export const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '●'.repeat(number.length - 8);
  const numberArrays = securedCreditNumber.match(/.{1,4}/g) ?? [];
  return numberArrays.map((n) => n.split(''));
};

export const findCreditCardCompanyById = (id: string) => {
  const index = creditCardCompanies.findIndex((c) => c.id === id);
  if (index === -1) {
    return {
      id: 'default',
      name: 'COMPANY',
      color: 'white',
      backgroundColor: 'black'
    };
  }
  return creditCardCompanies[index];
};

export const checkCreditCardValidations = (creditCard: CreditCard) => {
  const isValidCVC = validateCVC(creditCard.cvc);
  const isValidExpiry = validateExpiry(creditCard.expiry);
  const isValidCardNumber = validateNumber(creditCard.number);
  const isValidCardPassword = validatePassword(
    creditCard.password[0],
    creditCard.password[1]
  );

  const isCreditCardError = [
    isValidCVC,
    isValidExpiry,
    isValidCardNumber,
    isValidCardPassword
  ].some((v) => v);

  return isCreditCardError;
};

export const markExpiry = (expiry: string) => {
  const newCardExpiryArray = expiry.split('');
  if (newCardExpiryArray.length > 2) {
    newCardExpiryArray.splice(2, 0, '/');
  }
  return newCardExpiryArray.join('');
};

export default {};
