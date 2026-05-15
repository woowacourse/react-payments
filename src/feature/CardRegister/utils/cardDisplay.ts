import { CARD_BRANDS, type CardBrandName } from '../constant/cardBrands';
import { CARD_COMPANIES, type CardCompanyId } from '../constant/cardCompanies';
import { isPrefixInRange } from './validator';

export const getCardBrandName = (
  cardNumbers: string[],
): CardBrandName | null => {
  const fullNumber = cardNumbers.join('');

  const matchedBrand = CARD_BRANDS.find((brand) =>
    brand.prefixRules.some((rule: Record<string, number>) =>
      isPrefixInRange(fullNumber, rule.digitCount, rule.start, rule.end),
    ),
  );

  return matchedBrand?.name ?? null;
};

export const getCardBrandImage = (brandName: CardBrandName) => {
  return CARD_BRANDS.find((brand) => brand.name === brandName)?.image ?? null;
};

export const getCardCompanyColor = (cardCompanyId: CardCompanyId | null) => {
  const selectedCardCompany = CARD_COMPANIES.find(
    (cardCompany) => cardCompany.id === cardCompanyId,
  );

  return selectedCardCompany?.color ?? '#333333';
};

export const getCardCompanyName = (cardCompanyId: CardCompanyId | null) => {
  const selectedCardCompany = CARD_COMPANIES.find(
    (cardCompany) => cardCompany.id === cardCompanyId,
  );

  return selectedCardCompany?.name ?? '';
};
