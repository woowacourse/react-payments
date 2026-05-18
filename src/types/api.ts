export type RegisterCardRequest = {
  cardNumbers: string[];
  expiryDate: string[];
  cvc: string;
  cardCompany: string;
  password: string;
};

export type CardResponse = {
  id: string;
  cardNumbers: string[];
  cardCompany: string;
  expiryDate: string[];
};

export type ApiError = {
  code: 'cardNumbers' | 'expiryDate' | 'cvc' | 'password';
  message: string;
};
