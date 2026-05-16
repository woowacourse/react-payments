import type { CardError } from '../types/errorTypes';
import type { CardIssuerType } from '../types/cardStausTypes';
import { getCardBrand, getCardNumberLength, isPossibleCardBrandPrefix } from './cardBrand';

type CardNumberError = CardError | 'normal';

export function isNumericInput(value: string): boolean {
  return value === '' || /^\d+$/.test(value);
}

export function validateCardNumber(cardNumber: string): CardNumberError {
  if (!isNumericInput(cardNumber)) {
    return 'notNumber';
  }

  if (!isPossibleCardBrandPrefix(cardNumber)) {
    return 'notExistBrand';
  }

  return 'normal';
}

export function isCardNumberComplete(cardNumber: string): boolean {
  const cardBrand = getCardBrand(cardNumber);

  return cardBrand !== 'unknown' && cardNumber.length === getCardNumberLength(cardBrand);
}

export function isCardExpiryDateComplete(cardExpiryDate: string[]): boolean {
  return (
    cardExpiryDate[1].length === 2 &&
    Number(cardExpiryDate[0]) > 0 &&
    Number(cardExpiryDate[0]) <= 12
  );
}

export function isCardIssuerSelected(cardIssuer: CardIssuerType | ''): boolean {
  return cardIssuer !== '';
}

export function isCardCvcComplete(cardCvc: string): boolean {
  return cardCvc.length === 3 && isNumericInput(cardCvc);
}

export function isCardPasswordComplete(cardPassword: string): boolean {
  return cardPassword.length === 2 && isNumericInput(cardPassword);
}
