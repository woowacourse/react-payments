const FORM = {
  CARD_NUMBER: {
    MAX_LENGTH: 4,
    COUNT: 4,
  },
  PIN_NUMBER: {
    MAX_LENGTH: 1,
    COUNT: 2,
    DOT_COUNT: 2,
  },
  EXPIRY_DATE: {
    MAX_LENGTH: 4 + 3,
    MIN_MONTH: 1,
    MAX_MONTH: 12,
  },
  CVC: {
    MAX_LENGTH: 3,
  },
  OWNER_NAME: {
    MAX_LENGTH: 30,
  },
  NICKNAME: {
    MAX_LENGTH: 10,
  },
};

export default FORM;
