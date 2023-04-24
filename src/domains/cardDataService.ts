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
