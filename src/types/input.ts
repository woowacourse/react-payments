import { CardCompanyType, CardExpirationDateType } from '@/types';
import { CardNumberSequenceType } from './card';

export type CardNumberInputType = Record<CardNumberSequenceType, string>;
export type CardExpirationDateInputType = Record<CardExpirationDateType, string>;
export type CardCVCNumberInputType = string;
export type CardPasswordInputType = string;
export type CardCompanyInputType = CardCompanyType | '';
