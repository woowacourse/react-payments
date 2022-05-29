import { CARD_TYPE } from '@/utils/constants';

export type CardNumberInput = {
  first: string;
  second: string;
  third: string;
  forth: string;
};

export type CardExpirationDateInput = {
  month: string;
  year: string;
};

export type CardSecurityCodeInput = string;

export type CardPasswordInput = {
  first: string;
  second: string;
};

export type CardTypeInput = keyof typeof CARD_TYPE;

export interface Card {
  id: string;
  alias: string;
  cardNumber: CardNumberInput;
  expirationDate: CardExpirationDateInput;
  securityCode: CardSecurityCodeInput;
  password: CardPasswordInput;
  cardType: CardTypeInput;
}
