export interface CardPublicInfo {
  id: number;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
}

export interface CardPrivateInfo extends CardPublicInfo {
  securityCode: string;
  password: string;
}
