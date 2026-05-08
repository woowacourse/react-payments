import type {
  CardBrandName,
  CardCompanyId,
} from '../../../common/types/CardPreview';
import { CARD_COMPANIES } from '../constant/CARD_BRANDS';
import { isPrefixInRange } from './validator';

export const getCardBrandName = (
  cardNumbers: string[],
): CardBrandName | null => {
  const fullNumber = cardNumbers.map((chunk) => chunk.padEnd(4, '#')).join('');

  if (fullNumber.startsWith('4')) return 'visa';

  if (isPrefixInRange(fullNumber, 2, 51, 55)) return 'masterCard';
  if (isPrefixInRange(fullNumber, 2, 36, 36)) return 'diners';
  if (
    isPrefixInRange(fullNumber, 2, 34, 34) ||
    isPrefixInRange(fullNumber, 2, 37, 37)
  )
    return 'amex';

  if (
    isPrefixInRange(fullNumber, 6, 622126, 622925) ||
    isPrefixInRange(fullNumber, 3, 624, 626) ||
    isPrefixInRange(fullNumber, 4, 6282, 6288)
  )
    return 'unionPay';

  return null;
};

export const getCardCompanyColor = (cardCompanyId: CardCompanyId | null) => {
  const selectedCardCompany = CARD_COMPANIES.find(
    (cardCompany) => cardCompany.id === cardCompanyId,
  );

  return selectedCardCompany?.color ?? '#333333';
};
