export const LOCAL_STORAGE_CARD_KEY = 'cardList';

export const PAGE_KIND = Object.freeze({
  HOME: 'homePage',
  ADD_CARD: 'addCardPage',
});

export const PAGE = [PAGE_KIND.HOME, PAGE_KIND.ADD_CARD] as const;

export const Z_INDEX_INFO = {
  MODAL: 1,
};

export const TAB_INDEX_INFO = {
  DISMISS: 999,
  ADD_CARD_PAGE_TAB_INDEX: {
    FIRST_CARD_NUMBER: 0,
    SECOND_CARD_NUMBER: 1,
    THIRD_CARD_NUMBER: 2,
    FOURTH_CARD_NUMBER: 3,
    MONTH: 4,
    YEAR: 5,
    OWNER: 6,
    CVC: 7,
    FIRST_PASSWORD: 8,
    SECOND_PASSWORD: 9,
    SUBMIT: 10,
  },
};
