import { CARD_BRAND_LIST } from '../constants';

export type CardBrandType = (typeof CARD_BRAND_LIST)[number];

export interface CardBrandProps {
  cardBrandTypeState: CardBrandType | null;
  handleDropdownChange: (value: CardBrandType) => void;
}
