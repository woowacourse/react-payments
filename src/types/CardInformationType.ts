export type CardInformationType = {
  uniqueNumber: [string, string, string, string];
  expirationDate: [string, string];
  cvcNumber: [string];
  password: [string];
  company: string;
};

export type setCardInformationType = React.Dispatch<React.SetStateAction<CardInformationType>>;

export type CardType = "visa" | "master" | "none";
