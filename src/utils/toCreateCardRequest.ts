import type { CardRequest, CardIssuerType } from '../types/cardStausTypes';
import { formatCardExpiryDate } from './formatCardExpiryDate';
import { CARD_ISSUER_CODE } from '../constants/constant';

export function toCreateCardRequest(
  cardNumbers: string[],
  cardExpiryDate: string[],
  cardCvc: string,
  cardIssuer: CardIssuerType | '',
): CardRequest {
  return {
    number: cardNumbers.join(''),
    expirationDate: formatCardExpiryDate(cardExpiryDate),
    cvc: cardCvc,
    issuerCode: CARD_ISSUER_CODE[cardIssuer],
  };
}
