import { COLOR } from './card';

export const DEFAULT_CARD_INFO_STATE = {
  SERIAL_NUMBERS: {
    firstSerialNumber: '',
    secondSerialNumber: '',
    thirdSerialNumber: '',
    fourthSerialNumber: '',
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
  COMPANY: {
    name: '',
    backgroundColor: COLOR.DEFAULT,
  },
  NICK_NAME: '',
};
