import { SetStateAction } from 'react';

export type SerialNumbers = Record<
  | 'firstSerialNumber'
  | 'secondSerialNumber'
  | 'thirdSerialNumber'
  | 'fourthSerialNumber',
  string
>;
export type ExpirationDate = Record<'month' | 'year', string | null>;
export type OwnerName = string | null;
export type SecurityCode = string;
export type Password = Record<'firstPassword' | 'secondPassword', string>;
export type Company = Record<'name' | 'backgroundColor', string>;
export type nickname = string;

export type SetSerialNumbers = React.Dispatch<SetStateAction<SerialNumbers>>;
export type SetExpirationDate = React.Dispatch<SetStateAction<ExpirationDate>>;
export type SetOwnerName = React.Dispatch<SetStateAction<OwnerName>>;
export type SetSecurityCode = React.Dispatch<SetStateAction<SecurityCode>>;
export type SetPassword = React.Dispatch<SetStateAction<Password>>;
export type setCompany = React.Dispatch<SetStateAction<Company>>;
export type setNickname = React.Dispatch<SetStateAction<nickname>>;

export type Card = {
  serialNumbers: SerialNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: Password;
  company: Company;
  nickname: nickname;
};
export type SetCard = React.Dispatch<SetStateAction<Card>>;

export type CardList = Record<string, Card> | null;
export type SetCardList = React.Dispatch<React.SetStateAction<CardList>>;
