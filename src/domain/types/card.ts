type CardInformation = {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  owner?: string;
};

type CardNumber = [string, string, string, string];

type ExpirationDate = {
  year: string;
  month: string;
};

export type { CardInformation, CardNumber, ExpirationDate };
