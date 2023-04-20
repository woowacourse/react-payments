const LOCAL_STORAGE_KEY = { CARD_LIST: 'cardList' };

export interface Card {
  cardNumber: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
  expirationDate: {
    month: string;
    year: string;
  };
  ownerName: string;
  securityCode: string;
  password: {
    firstPassword: string;
    secondPassword: string;
  };
}

export const cardDataService = {
  getCardList(): Card[] {
    const rawCardList = localStorage.getItem(LOCAL_STORAGE_KEY.CARD_LIST);

    return JSON.parse(rawCardList ?? '[]');
  },

  addNewCard(card: Card) {
    const storedCardList = this.getCardList();

    localStorage.setItem(
      LOCAL_STORAGE_KEY.CARD_LIST,
      JSON.stringify([card, ...storedCardList])
    );
  },
};
