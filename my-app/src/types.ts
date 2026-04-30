export type Mode = "CARD" | "EXP" | "CVC";

export type CardInfo = {
  numbers: string[];
  expiry: string[];
  cvc: string;
  brand: string;
};
