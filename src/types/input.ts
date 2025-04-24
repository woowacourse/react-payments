import { CardCompanyType, CardExpirationDateType } from '@/types';
import { CardNumberSequenceType, CardPasswordType } from './card';

export type CardNumberInputType = Record<CardNumberSequenceType, string>;
export type CardExpirationDateInputType = Record<CardExpirationDateType, string>;
export type CardCVCNumberInputType = Record<'cvc', string>;
export type CardPasswordInputType = Record<CardPasswordType, string>;
export type CardCompanyInputType = Record<'company', CardCompanyType>;
