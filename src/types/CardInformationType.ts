export type CardInformationType = {
  uniqueNumber: string[];
  expirationDate: string[];
  cvcNumber: string[];
};

export type CardType = "visa" | "mastercard" | "none";
