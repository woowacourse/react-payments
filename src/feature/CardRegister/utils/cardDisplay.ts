import type {
  CardBrandName,
  CardCompanyId,
} from '../../../common/types/CardPreview';
import { CARD_COMPANIES } from '../constant/CARD_BRANDS';

export const getCardBrandName = (
  cardNumbers: string[],
): CardBrandName | null => {
  const fullNumber = cardNumbers.map((chunk) => chunk.padEnd(4, '#')).join('');

  if (fullNumber.startsWith('4')) return 'visa';

  const prefix = Number(fullNumber.slice(0, 2));
  if (prefix >= 51 && prefix <= 55) return 'masterCard';

  return null;
};

export const getCardCompanyColor = (cardCompanyId: CardCompanyId | null) => {
  const selectedCardCompany = CARD_COMPANIES.find(
    (cardCompany) => cardCompany.id === cardCompanyId,
  );

  return selectedCardCompany?.color ?? '#333333';
};
