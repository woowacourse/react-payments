import { CardCompanyType, CardExpirationDateType, CardNumberSequenceType } from '@/types';

export type CardNumberInputType = Record<CardNumberSequenceType, string>;
export type CardExpirationDateInputType = Record<CardExpirationDateType, string>;
export type CardCVCNumberInputType = Record<'cvc', string>;
export type CardPasswordInputType = Record<'password', string>;
export type CardCompanyInputType = Record<'company', CardCompanyType>;
