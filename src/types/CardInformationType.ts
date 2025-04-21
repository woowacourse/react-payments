export type CardInformationType = {
  uniqueNumber: string[];
  expirationDate: string[];
  cvcNumber: string[];
};

export type setCardInformationType = React.Dispatch<React.SetStateAction<CardInformationType>>;

export type CardType = "visa" | "master" | "none";
