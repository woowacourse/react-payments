import visa from '../assets/Visa.png';
import master from '../assets/Mastercard.png';
import diners from '../assets/Diners.png';
import amex from '../assets/AMEX.png';
import unionpay from '../assets/UnionPay.png';
import type { CardBrand } from '../types/cardStatusTypes';

export const CARD_BRAND_IMAGE: Record<Exclude<CardBrand, ''>, { src: string; alt: string }> = {
  visa: {
    src: visa,
    alt: 'Visa',
  },
  master: {
    src: master,
    alt: 'MasterCard',
  },
  diners: {
    src: diners,
    alt: 'Diners',
  },
  amex: {
    src: amex,
    alt: 'AMEX',
  },
  unionpay: {
    src: unionpay,
    alt: 'UnionPay',
  },
};
