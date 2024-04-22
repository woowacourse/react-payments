type MM = string;
type YY = string;

export type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface ExpiryDate {
  month: MM;
  year: YY;
}
