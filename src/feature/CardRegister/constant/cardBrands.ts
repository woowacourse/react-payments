import visaImg from '../assets/Visa.png';
import masterCardImg from '../assets/Mastercard.png';
import amexImg from '../assets/Amex.svg';
import dinersImg from '../assets/Diners.svg';
import unionPayImg from '../assets/UnionPay.svg';

// 카드 브랜드 - visa, masterCard, ...
export type CardBrandName = (typeof CARD_BRANDS)[number]['name'];

export const CARD_BRANDS = [
  {
    name: 'visa',
    segmentLengths: [4, 4, 4, 4],
    prefixRules: [{ digitCount: 1, start: 4, end: 4 }],
  },
  {
    name: 'masterCard',
    segmentLengths: [4, 4, 4, 4],
    prefixRules: [{ digitCount: 2, start: 51, end: 55 }],
  },
  {
    name: 'amex',
    segmentLengths: [4, 4, 4, 3],
    prefixRules: [
      { digitCount: 2, start: 34, end: 34 },
      { digitCount: 2, start: 37, end: 37 },
    ],
  },
  {
    name: 'diners',
    segmentLengths: [4, 4, 4, 2],
    prefixRules: [{ digitCount: 2, start: 36, end: 36 }],
  },
  {
    name: 'unionPay',
    segmentLengths: [4, 4, 4, 4],
    prefixRules: [
      { digitCount: 6, start: 622126, end: 622925 },
      { digitCount: 3, start: 624, end: 626 },
      { digitCount: 4, start: 6282, end: 6288 },
    ],
  },
] as const;

export const BRANDS_IMAGE: Record<CardBrandName, string> = {
  visa: visaImg,
  masterCard: masterCardImg,
  diners: dinersImg,
  amex: amexImg,
  unionPay: unionPayImg,
};
