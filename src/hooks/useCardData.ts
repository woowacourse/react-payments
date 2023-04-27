import { COMPANIES } from '../constants/cardCompany';

const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export interface Card {
  cardNumber: string[];
  expirationDate: {
    month: string;
    year: string;
  };
  ownerName: string;
  securityCode: string;
  password: string[];
  selectedCardCompany: keyof typeof COMPANIES | '';
}

export const useCardData = () => {
  const getCardList = (): Card[] => {
    const rawCardList = localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST);

    return JSON.parse(rawCardList ?? '[]');
  };

  const addNewCard = (card: Card) => {
    const storedCardList = getCardList();

    localStorage.setItem(
      LOCAL_STORAGE_KEY.CARD_LIST,
      JSON.stringify([card, ...storedCardList])
    );
  };

  return { getCardList, addNewCard };
};
