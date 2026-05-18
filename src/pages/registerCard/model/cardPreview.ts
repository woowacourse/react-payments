import { type CardBrand } from '@/entities/card/model/cardNumber';
import type { Bank } from '@/entities/card/model/bank';
import type { ExpiryDate } from '@/entities/card/model/expiryDate';

export interface CardPreviewInfo {
  numbers: string[];
  expiryDate: ExpiryDate;
  bank: Bank | undefined;
}

const STAR = '●';

const CARD_PREVIEW_FORMAT: Record<CardBrand | 'UNKNOWN', number[]> = {
  VISA: [4, 4, 4, 4],
  MASTERCARD: [4, 4, 4, 4],
  DINERS: [4, 6, 4],
  AMEX: [4, 6, 5],
  UNIONPAY: [4, 4, 4, 4],
  UNKNOWN: [4, 4, 4, 4],
};

const getCardPreviewFormat = (brand: CardBrand | undefined): number[] => {
  return brand !== undefined ? CARD_PREVIEW_FORMAT[brand] : CARD_PREVIEW_FORMAT.UNKNOWN;
};

const splitByFormat = (value: string, format: number[]): string[] => {
  let cursor = 0;

  return format.map((length) => {
    const sliced = value.slice(cursor, cursor + length);
    cursor += length;
    return sliced;
  });
};

export const getPreviewCardNumbers = (cardNumber: string, brand: CardBrand | undefined) => {
  const format = getCardPreviewFormat(brand);
  const sliceds = splitByFormat(cardNumber, format);

  return sliceds.map((sliced, index) => {
    return index >= 2 ? STAR.repeat(sliced.length) : sliced;
  });
};
