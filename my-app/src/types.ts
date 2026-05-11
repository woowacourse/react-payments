export type CardInfo = {
  expiry: string[];
  company: string;
  numbers: string[];
  cvc: string;
  password: string;
};

export type PublicCardInfo = {
  numberHead: string;
  company: string;
};
