import { CARD_BRANDS } from '../constants/conditions';

export type cardBrandsType = (typeof CARD_BRANDS)[keyof typeof CARD_BRANDS] | '';
