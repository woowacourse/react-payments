import { CARD_BRAND_MAP } from '@components/payments/@cardBrand/CardBrandDropdown/CardBrandDropdown.constant';
import { CardBrand } from '@components/payments/@cardBrand/CardBrandDropdown/CardBrandDropdown.type';

export const isCardBrandName = (string: string): string is CardBrand => {
  return string in CARD_BRAND_MAP;
};
