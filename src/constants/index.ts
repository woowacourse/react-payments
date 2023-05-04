export const LOCAL_STORAGE_KEY = {
  CARD_LIST: 'cardList',
} as const;

export const PATH_TITLE = {
  '/': '보유카드',
  '/addCard': '카드 추가',
  '/addCardName': '',
};

export const PAGE_PATH = {
  HOME: '/',
  ADD_CARD: '/addCard',
  ADD_CARD_NAME: '/addCardName',
};

export const CARD_INFO_TEXT = {
  cardNumbers: '카드 번호',
  cardExpirationDate: '만료일',
  cardOwner: '카드 소유자 이름(선택)',
  cardCVC: '보안 코드(CVC/CVV)',
  cardPWD: '카드 비밀번호',
};
