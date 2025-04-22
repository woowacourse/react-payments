import { CARD_COMPANIES } from './constants';

export type CardType = 'visa' | 'master' | 'etc';
export type SequenceType = 'first' | 'second' | 'third' | 'fourth';
export type DateType = 'month' | 'year';
export type CardCompanyType = (typeof CARD_COMPANIES)[number]['id'];
