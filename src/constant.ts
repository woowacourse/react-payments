export const LOCAL_STORAGE_CARD_KEY = 'cardList';

export const PAGE_KIND = {
  home: 'homePage',
  addCard: 'addCardPage',
};

export const PAGE = [PAGE_KIND.home, PAGE_KIND.addCard] as const;

export const TAB_INDEX_INFO = {
  dismiss: 999,
  addCardPage: {
    firstCardNumber: 0,
    secondCardNumber: 1,
    thirdCardNumber: 2,
    fourthCardNumber: 3,
    month: 4,
    year: 5,
    owner: 6,
    cvc: 7,
    firstPassword: 8,
    secondPassword: 9,
  },
};
