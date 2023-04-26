import { CardRegisterInfo } from '../types/card.type';

export const getCardList = (): CardRegisterInfo[] => {
  const cardListJSON = localStorage.getItem('CardList');
  return cardListJSON ? JSON.parse(cardListJSON) : [];
};

export const saveCardList = (cardList: CardRegisterInfo[]): void => {
  const cardListJSON = JSON.stringify(cardList);
  localStorage.setItem('CardList', cardListJSON);
};
