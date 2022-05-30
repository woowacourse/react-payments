import { ExpiredInput, NumberInput, PasswordsInput } from './SomeInput';

type CardNumber = {
  value: null | NumberInput<string>;
  isValid: boolean;
};

type ExpiredDate = {
  value: null | ExpiredInput<string>;
  isValid: boolean;
};

type OwnerName = {
  value: null | string;
  isValid: boolean;
};

type SecurityNumber = {
  value: null | string;
  isValid: boolean;
};

type Password = {
  value: null | PasswordsInput<string>;
  isValid: boolean;
};

type CardName = {
  value: null | string;
  isValid: boolean;
};

interface CardData {
  cardNumber: CardNumber;
  expiredDate: ExpiredDate;
  ownerName: OwnerName;
  securityNumber: SecurityNumber;
  password: Password;
  cardName: CardName;
}

export { CardNumber, ExpiredDate, OwnerName, SecurityNumber, Password, CardName, CardData };
