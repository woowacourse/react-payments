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
  cardNumbers: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardNumbers: () => {},
  expirationDate: {
    month: null,
    year: null,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExpirationDate: () => {},
  ownerName: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOwnerName: () => {},
  securityCode: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSecurityCode: () => {},
  password: {
    firstPassword: '',
    secondPassword: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPassword: () => {},
  cardCompany: {
    name: null,
    theme: null,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardCompany: () => {},
  cardAlias: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardAlias: () => {},
});

export default CardInfoContext;
