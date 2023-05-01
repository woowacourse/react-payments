type CardNumberFormat = [string, string, string, string];
type PasswordFormat = [string, string];

interface ExpirationDateFormat {
  month: string;
  year: string;
}

interface Card {
  cardNumber: "";
  expirationDate: ExpirationDateFormat;
  ownerName?: string;
  securityCode: string;
  password: PasswordFormat;
}

type CardInputValidation = {
  [K in keyof Card]: boolean;
};

export type {
  CardNumberFormat,
  PasswordFormat,
  ExpirationDateFormat,
  Card,
  CardInputValidation,
};
