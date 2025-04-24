import { CARD_COMPANIES } from '@/constants';

export type CardType = 'visa' | 'master' | 'etc';

export type CardNumberSequenceType = 'first' | 'second' | 'third' | 'fourth';
export type CardExpirationDateType = 'month' | 'year';

export type CardCompanyType = (typeof CARD_COMPANIES)[number]['id'] | '';
