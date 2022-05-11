export const DEFAULT_CARD_INFO = {
  cardNumber: {
    firstColumn: '',
    secondColumn: '',
    thirdColumn: '',
    forthColumn: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: {
    firstNumber: '',
    secondNumber: '',
  },
  cardNickName: '',
};

export const DEFAULT_ROUTE_INFO = {
  addCard: 'app',
  completeAddCard: 'app hide',
  cardList: 'app hide',
};

export const CARD_SIZE = {
  SMALL: 'small',
  BIG: 'big',
};

export const MAX_LENGTH = {
  CARD_NUMBER: 4,
  CARD_EXPIRATION_DATE: 2,
  CARD_OWNER_NAME: 30,
  CARD_SECURITY_CODE: 3,
  CARD_PASSWORD: 1,
  CARD_NICK_NAME: 15,
};

export const PAGE = {
  ADD_CARD: 'addCardPage',
  COMPLETE_ADD_CARD: 'completeAddCardPage',
  CARD_LIST: 'cardListPage',
};
