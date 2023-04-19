interface ExpirationDate {
  month: string;
  year: string;
}

interface Card {
  number: [string, string, string, string];
  expirationDate: ExpirationDate;
  ownerName?: string;
  securityCode: string;
  password: [string, string];
}

type CardInputValidation = {
  [K in keyof Card]: boolean;
};

export type { Card, CardInputValidation };
