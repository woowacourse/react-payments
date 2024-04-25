import { CardBrand } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.type';

export const isCompletedInputCardBrand = (cardBrand: CardBrand | '', isDropdownOpen: boolean) => {
  return cardBrand !== '' && !isDropdownOpen;
};
