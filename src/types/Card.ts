import { INPUT_ELEMENT_KEY_SEPARATOR } from './../utils/constants/index';
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

export type CardOwnerNameInput = string;

export type CardSecurityCodeInput = string;

export type CardPasswordInput = {
  first: string;
  second: string;
};

export type CardType = keyof typeof CARD_TYPE | null;

export interface Card {
  id: string;
  alias: string;
  cardNumber: CardNumberInput;
  expirationDate: CardExpirationDateInput;
  ownerName: CardOwnerNameInput;
  securityCode: CardSecurityCodeInput;
  password: CardPasswordInput;
  cardType: CardType;
}

export type CardInput = Omit<Card, 'id' | 'alias'>;

export type CardExcludeInput = Omit<Card, keyof CardInput>;

export type CardInputType =
  | `cardNumber/first`
  | `cardNumber/second`
  | `cardNumber/third`
  | `cardNumber/forth`
  | 'expirationDate/month'
  | 'expirationDate/year'
  | 'ownerName'
  | 'securityCode'
  | 'password/first'
  | 'password/second';

export type CardPasswordTypeInput =
  | `cardNumber/third`
  | `cardNumber/forth`
  | 'securityCode'
  | 'password/first'
  | 'password/second';
