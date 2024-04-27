interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface ExpirationDate {
  month: string;
  year: string;
}

interface OwnerName {
  ownerName: string;
}

interface CardIssuer {
  cardIssuer: string;
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
type CardNumbersKey = keyof CardNumbers;
type ExpirationDateKey = keyof ExpirationDate;
type OwnerNameKey = keyof OwnerName;
type CardIssuerKey = keyof CardIssuer;
type CVCKey = keyof CVC;
type PasswordKey = keyof Password;
