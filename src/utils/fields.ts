import { CardBrand } from '../components/CardPreview/CardPreview';
import { CARD_BRAND } from '../constants';

export const getCardNumbersMaxLength = (
  cardBrand: CardBrand,
  cardNumbersLength: number,
  index: number
) => {
  const lastField = index === cardNumbersLength - 1;

  if (lastField && cardBrand === CARD_BRAND['DINERS']) return 2;
  else if (lastField && cardBrand === CARD_BRAND['AMEX']) return 3;

  return 4;
};
