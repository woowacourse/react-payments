import { CARD_INFORMATION } from '../constants/cardInformation';
import { CardBrandType, cardBrand } from '../types/cardType';
import { isRange } from './isRange';

const checkCardBrand = (cardNumber: string[]): CardBrandType => {
  const firstDigit = cardNumber[0][0];
  const firstTwoDigits = Number(cardNumber[0].substring(0, 2));

  if (firstDigit === CARD_INFORMATION.visa) {
    return cardBrand.visa;
  }
  if (!isRange(firstTwoDigits, CARD_INFORMATION.masterCard.min, CARD_INFORMATION.masterCard.max)) {
    return cardBrand.masterCard;
  }

  return cardBrand.domesticCard;
};

export default checkCardBrand;
