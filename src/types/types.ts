export type CardNumberKey = 'first' | 'second' | 'third' | 'forth';

export type CardNumber = Record<CardNumberKey, string>;

export type CardNumberError = Record<CardNumberKey, string>;

export type CardExpirationDate = {
  month: string;
  year: string;
};

export type CardExpirationDateError = {
  month: string;
  year: string;
};

export type CardCVC = number | null;

export type CardPassword = number | null;

export enum CardBrands {
  BC카드 = 'BC카드',
  신한카드 = '신한카드',
  카카오뱅크 = '카카오뱅크',
  현대카드 = '현대카드',
  우리카드 = '우리카드',
  롯데카드 = '롯데카드',
  하나카드 = '하나카드',
  국민카드 = '국민카드',
}

export type CardBrandType = CardBrands;
