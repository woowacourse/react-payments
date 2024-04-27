interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  ownerName: string;
}

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
