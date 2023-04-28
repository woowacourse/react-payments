export type CreditCardPasswordType = [string, string];

export type CreditCardKeys = keyof CreditCard;
export type CreditCard = {
  companyId: string;
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
  nickname: string;
};

export type CreditCardCompanyKeys = 'id' | 'name' | 'color' | 'backgroundColor';
export type CreditCardCompany = Record<CreditCardCompanyKeys, string>;

export interface CreditCardInputProps {
  name: CreditCardKeys;
}
