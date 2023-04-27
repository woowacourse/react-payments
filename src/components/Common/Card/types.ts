type CardNumber = [string, string, string, string];
type ExpirationDate = [string, string];
type CardPassword = [string, string];
type Owner = [string];
type SecurityCode = [string];

interface CardInformation {
  cardName?: string;
  bankName: string;
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  owner?: Owner;
  securityCode?: SecurityCode;
  password?: CardPassword;
}

export type { CardNumber, CardPassword, ExpirationDate, Owner, SecurityCode, CardInformation };
