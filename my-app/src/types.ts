export type CardInfo = {
  numbers: string[];
  expiry: string[];
  cvc: string;
  company: string;
  password: string;
};

export type ValidationResult = { errorIndex: number; message: string };
