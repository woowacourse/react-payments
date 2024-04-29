import { CARD_COLOR } from '../constants/card';

type MM = string;
type YY = string;

export type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface ExpiryDate {
  month: MM;
  year: YY;
}

export type CardType = keyof typeof CARD_COLOR;
