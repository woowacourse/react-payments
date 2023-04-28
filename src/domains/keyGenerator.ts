import { CardInfo } from '../types/state';

export const generateCardKey = (cardInfo: CardInfo) => {
  return cardInfo.cardCompany.name + Object.values(cardInfo.cardNumbers).join('');
};
