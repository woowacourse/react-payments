import { CARD_BRANDS } from '../constant/CARD_BRANDS';

export const getCardTypeName = (
  cardNumbers: string[],
): 'visa' | 'masterCard' | null => {
  const fullNumber = cardNumbers.map((chunk) => chunk.padEnd(4, '#')).join('');

  if (fullNumber.startsWith('4')) return 'visa';

  const prefix = Number(fullNumber.slice(0, 2));
  if (prefix >= 51 && prefix <= 55) return 'masterCard';

  return null;
};

export const getCardBrandColor = (cardBrandId: string | null) => {
  const selectedCardBrand = CARD_BRANDS.find(
    (cardBrand) => cardBrand.id === cardBrandId,
  );

  return selectedCardBrand?.color ?? '#333333';
};
