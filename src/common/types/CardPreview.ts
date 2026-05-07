import type { CARD_BRANDS } from '../../feature/CardRegister/constant/CARD_BRANDS';

export type CardTypeName = 'visa' | 'masterCard' | null;

export type CardBrandId = (typeof CARD_BRANDS)[number]['id'];
