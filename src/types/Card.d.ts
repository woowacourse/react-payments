type CardType = 'VISA' | 'MasterCard' | 'None';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type Expiration = {
  month: string;
  year: string;
};

interface CardInfo {
  number: CardNumber;
  expiration: Expiration;
  company: string;
  cvc: string;
  passwordFront: string;
}
