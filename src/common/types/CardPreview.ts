import type {
  CARD_BRANDS,
  CARD_COMPANIES,
} from '../../feature/CardRegister/constant/CARD_BRANDS';

// 카드 브랜드 - visa, masterCard, ...
export type CardBrandName = (typeof CARD_BRANDS)[number]['name'];

export type CardCompanyId = (typeof CARD_COMPANIES)[number]['id'];
