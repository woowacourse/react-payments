import { COLOR } from './cardInfo';

export const DEFAULT_CARD_INFO_STATE = {
  CARD_NUMBERS: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
  },
  EXPIRATION_DATE: {
    month: null,
    year: null,
  },
  OWNER_NAME: null,
  SECURITY_CODE: '',
  PASSWORD: {
    firstPassword: '',
    secondPassword: '',
  },
  CARD_COMPANY: {
    name: '',
    theme: COLOR.DEFAULT,
  },
  CARD_ALIAS: null,
};
