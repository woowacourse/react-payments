import { CARD_BRAND_MAP } from '@components/payments/CardBrandDropdown/CardBrandDropdown.constant';
import { CardBrand } from '@components/payments/CardBrandDropdown/CardBrandDropdown.type';

export const isCardBrandName = (string: string): string is CardBrand => {
  return string in CARD_BRAND_MAP;
};
