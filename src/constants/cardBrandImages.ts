import visa from '../assets/Visa.png';
import master from '../assets/Mastercard.png';
import type { CardBrand } from '../types/cardStausTypes';

export const CARD_BRAND_IMAGE: Record<Exclude<CardBrand, ''>, { src: string; alt: string }> = {
  visa: {
    src: visa,
    alt: 'Visa',
  },
  master: {
    src: master,
    alt: 'MasterCard',
  },
};
