interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

type CardNumbersKey = keyof CardNumbers;

interface ExpirationDate {
  month: string;
  year: string;
}

type ExpirationDateKey = keyof ExpirationDate;

interface OwnerName {
  ownerName: string;
}

type OwnerNameKey = keyof OwnerName;

type Companies =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

interface CardIssuer {
  cardIssuer: Nullable<Companies>;
}

interface CVC {
  cvc: string;
}

interface Password {
  password: string;
}

interface CardInfo {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  cardIssuer: CardIssuer;
  cvc: CVC;
  password: Password;
}

type CardInfoKeys = keyof CardInfo;
