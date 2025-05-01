import { CARD_COMPANIES } from '@/constants';

export type CardType = 'visa' | 'master' | 'etc';

export type CardNumberSequence = 'first' | 'second' | 'third' | 'fourth';
export type CardExpirationDate = 'month' | 'year';

export type CardCompany = (typeof CARD_COMPANIES)[number]['id'] | '';
