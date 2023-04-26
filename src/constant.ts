export const LOCAL_STORAGE_CARD_KEY = 'cardList';

export const HOME_PAGE = 'homePage';
export const ADD_CARD_PAGE = 'addCardPage';

export const PAGE = [HOME_PAGE, ADD_CARD_PAGE] as const;

export const DISMISS_TAB_INDEX = 999;

export const ADD_CARD_PAGE_TAB_INDEX = {
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
};
