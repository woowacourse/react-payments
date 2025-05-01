type CardType = 'VISA' | 'MasterCard' | 'None';

type CompanyType =
  | ''
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

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
  company: CompanyType;
  cvc: string;
  passwordFront: string;
}
