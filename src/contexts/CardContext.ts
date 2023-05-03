import { createContext } from 'react';

import {
  CardList,
  SetCardList,
  ExpirationDate,
  SetExpirationDate,
  OwnerName,
  SetOwnerName,
  SecurityCode,
  SetSecurityCode,
  Password,
  SetPassword,
  Company,
  setCompany,
  nickname,
  setNickname,
  SerialNumbers,
  SetSerialNumbers,
} from '../types/state';
import { DEFAULT_CARD_INFO_STATE } from '../constants/state';

const CardContext = createContext<{
  cardList: CardList;
  setCardList: SetCardList;
  serialNumbers: SerialNumbers;
  setSerialNumbers: SetSerialNumbers;
  expirationDate: ExpirationDate;
  setExpirationDate: SetExpirationDate;
  ownerName: OwnerName;
  setOwnerName: SetOwnerName;
  securityCode: SecurityCode;
  setSecurityCode: SetSecurityCode;
  password: Password;
  setPassword: SetPassword;
  company: Company;
  setCompany: setCompany;
  nickname: nickname;
  setNickname: setNickname;
}>({
  cardList: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardList: () => {},
  serialNumbers: DEFAULT_CARD_INFO_STATE.SERIAL_NUMBERS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSerialNumbers: () => {},
  expirationDate: DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExpirationDate: () => {},
  ownerName: DEFAULT_CARD_INFO_STATE.OWNER_NAME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOwnerName: () => {},
  securityCode: DEFAULT_CARD_INFO_STATE.SECURITY_CODE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSecurityCode: () => {},
  password: DEFAULT_CARD_INFO_STATE.PASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPassword: () => {},
  company: DEFAULT_CARD_INFO_STATE.COMPANY,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCompany: () => {},
  nickname: DEFAULT_CARD_INFO_STATE.NICK_NAME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNickname: () => {},
});

export default CardContext;
