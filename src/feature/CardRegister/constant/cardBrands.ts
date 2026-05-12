import visaImg from '../assets/Visa.png';
import masterCardImg from '../assets/Mastercard.png';
import amexImg from '../assets/Amex.svg';
import dinersImg from '../assets/Diners.svg';
import unionPayImg from '../assets/UnionPay.svg';

// 카드 브랜드 - visa, masterCard, ...
export type CardBrandName = (typeof CARD_BRANDS)[number]['name'];

export const CARD_BRANDS = [
  { name: 'visa', segmentLengths: [4, 4, 4, 4] },
  { name: 'masterCard', segmentLengths: [4, 4, 4, 4] },
  { name: 'amex', segmentLengths: [4, 4, 4, 3] },
  { name: 'diners', segmentLengths: [4, 4, 4, 2] },
  { name: 'unionPay', segmentLengths: [4, 4, 4, 4] },
] as const;

export const BRANDS_IMAGE: Record<CardBrandName, string> = {
  visa: visaImg,
  masterCard: masterCardImg,
  diners: dinersImg,
  amex: amexImg,
  unionPay: unionPayImg,
};
