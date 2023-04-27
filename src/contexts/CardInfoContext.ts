import { createContext } from 'react';

import {
  CardInfo,
  SetCardInfoList,
  CardNumbers,
  SetCardNumbers,
  ExpirationDate,
  SetExpirationDate,
  OwnerName,
  SetOwnerName,
  SecurityCode,
  SetSecurityCode,
  Password,
  SetPassword,
  CardCompany,
  setCardCompany,
  CardAlias,
  SetCardAlias,
} from '../types/state';
import { DEFAULT_STATE } from '../constants/state';

const CardInfoContext = createContext<{
  cardInfoList: CardInfo[];
  setCardInfoList: SetCardInfoList;
  cardNumbers: CardNumbers;
  setCardNumbers: SetCardNumbers;
  expirationDate: ExpirationDate;
  setExpirationDate: SetExpirationDate;
  ownerName: OwnerName;
  setOwnerName: SetOwnerName;
  securityCode: SecurityCode;
  setSecurityCode: SetSecurityCode;
  password: Password;
  setPassword: SetPassword;
  cardCompany: CardCompany;
  setCardCompany: setCardCompany;
  cardAlias: CardAlias;
  setCardAlias: SetCardAlias;
}>({
  cardInfoList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardInfoList: () => {},
  cardNumbers: DEFAULT_STATE.CARD_NUMBERS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardNumbers: () => {},
  expirationDate: DEFAULT_STATE.EXPIRATION_DATE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExpirationDate: () => {},
  ownerName: DEFAULT_STATE.OWNER_NAME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOwnerName: () => {},
  securityCode: DEFAULT_STATE.SECURITY_CODE,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSecurityCode: () => {},
  password: DEFAULT_STATE.PASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPassword: () => {},
  cardCompany: DEFAULT_STATE.CARD_COMPANY,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardCompany: () => {},
  cardAlias: DEFAULT_STATE.CARD_ALIAS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardAlias: () => {},
});

export default CardInfoContext;
