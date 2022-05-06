export const DISPATCH_TYPE = {
  CHANGE_CARD_NUMBER: 'CHANGE_CARD_NUMBER',
  CHANGE_EXPIRATION_DATE: 'CHANGE_EXPIRATION_DATE',
  CHANGE_OWNER_NAME: 'CHANGE_OWNER_NAME',
  CHANGE_SECURITY_CODE: 'CHANGE_SECURITY_CODE',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_CARD_DESIGNATION: 'CHANGE_CARD_DESIGNATION',
  RESET: 'RESET',
};

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
  cardDesignation: '',
};

export const DEFAULT_ROUTE_INFO = {
  addCard: 'app',
  completeAddCard: 'app hide',
  cardList: 'app hide',
};

export const PAGE = {
  ADD_CARD: 'addCardPage',
  COMPLETE_ADD_CARD: 'completeAddCardPage',
  CARD_LIST: 'cardListPage',
};
