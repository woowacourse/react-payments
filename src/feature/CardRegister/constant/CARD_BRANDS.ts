import type { CardBrandName } from '../../../common/types/CardPreview';

import visaImg from '../assets/Visa.png';
import masterCardImg from '../assets/Mastercard.png';
import amexImg from '../assets/Amex.svg';
import dinersImg from '../assets/Diners.svg';
import unionPayImg from '../assets/UnionPay.svg';

export const CARD_BRANDS = [
  { name: 'visa', segmentLengths: [4, 4, 4, 4] },
  { name: 'masterCard', segmentLengths: [4, 4, 4, 4] },
  { name: 'amex', segmentLengths: [4, 4, 4, 3] },
  { name: 'diners', segmentLengths: [4, 4, 4, 2] },
  { name: 'unionPay', segmentLengths: [4, 4, 4, 4] },
];

export const BRANDS_IMAGE: Record<CardBrandName, string> = {
  visa: visaImg,
  masterCard: masterCardImg,
  diners: dinersImg,
  amex: amexImg,
  unionPay: unionPayImg,
};

export const CARD_COMPANIES = [
  { id: 'bc', name: 'BC카드', color: '#f64655' },
  { id: 'shinhan', name: '신한카드', color: '#0046ff' },
  { id: 'kakaoBank', name: '카카오뱅크', color: '#ffe100' },
  { id: 'hyundai', name: '현대카드', color: '#000000' },
  { id: 'woori', name: '우리카드', color: '#1388c9' },
  { id: 'lotte', name: '롯데카드', color: '#f7192a' },
  { id: 'hana', name: '하나카드', color: '#0b9992' },
  { id: 'kbKookmin', name: '국민카드', color: '#6f665b' },
] as const;
