import { SetStateAction } from 'react';

export type CardNumbers = Record<
  'firstCardNumber' | 'secondCardNumber' | 'thirdCardNumber' | 'fourthCardNumber',
  string
>;
export type ExpirationDate = Record<'month' | 'year', string | null>;
export type OwnerName = string | null;
export type SecurityCode = string;
export type Password = Record<'firstPassword' | 'secondPassword', string>;
export type CardCompany = Record<'name' | 'theme', string>;
export type CardAlias = string;

export type SetCardNumbers = React.Dispatch<SetStateAction<CardNumbers>>;
export type SetExpirationDate = React.Dispatch<SetStateAction<ExpirationDate>>;
export type SetOwnerName = React.Dispatch<SetStateAction<OwnerName>>;
export type SetSecurityCode = React.Dispatch<SetStateAction<SecurityCode>>;
export type SetPassword = React.Dispatch<SetStateAction<Password>>;
export type setCardCompany = React.Dispatch<SetStateAction<CardCompany>>;
export type SetCardAlias = React.Dispatch<SetStateAction<CardAlias>>;

export type CardInfo = {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: Password;
  cardCompany: CardCompany;
  cardAlias: CardAlias;
};
export type SetCardInfo = React.Dispatch<SetStateAction<CardInfo>>;

export type CardInfoList = Record<string, CardInfo>;
export type SetCardInfoList = React.Dispatch<React.SetStateAction<CardInfoList>>;
