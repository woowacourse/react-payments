import { CardCompany, CardExpirationDate, CardNumberSequence } from '@/types';

export type CardNumberInput = Record<CardNumberSequence, string>;
export type CardExpirationDateInput = Record<CardExpirationDate, string>;
export type CardCVCNumberInput = Record<'cvc', string>;
export type CardPasswordInput = Record<'password', string>;
export type CardCompanyInput = Record<'company', CardCompany>;
