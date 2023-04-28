import { CardInfo } from '../types/state';

export const generateCardKey = (cardInfo: CardInfo) => {
  return Object.values(cardInfo.cardNumbers).join(cardInfo.cardCompany.name);
};
