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

type CardInfo = {
  number: CardNumber;
  expiration: Expiration;
  cvc: string;
};

interface CardInfo {
  number: CardNumber;
  expiration: Expiration;
  cvc: string;
}
