import { CARD_BRANDS, CARD_COMPANY, INITIAL_CARD_NUMBER, INITIAL_CVC, INITIAL_EXPIRATION, INITIAL_PASSWORD } from './constants';

export type CardNumberType = typeof INITIAL_CARD_NUMBER;
export type CardNumberKey = keyof CardNumberType;

export type CardBrandType = typeof CARD_BRANDS;

export type CardLogoKey = keyof CardBrandType;

export type ExpirationType = typeof INITIAL_EXPIRATION;
export type ExpirationKey = keyof typeof INITIAL_EXPIRATION;

export type CvcType = typeof INITIAL_CVC;

export type PasswordType = typeof INITIAL_PASSWORD;
export type CardCompanyType = (typeof CARD_COMPANY)[number];
