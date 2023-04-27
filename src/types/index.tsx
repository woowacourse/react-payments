export type CreditCardPasswordTypeKeys = keyof CreditCardPasswordType;

export type CreditCardPasswordType = {
  first: string,
  second: string
};

export type CreditCardKeys = keyof CreditCard;

export type CreditCard = {
  companyId: string;
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
};

export type CreditCardCompanyKeys = 'id' | 'name' | 'color' | 'backgroundColor';
export type CreditCardCompany = Record<CreditCardCompanyKeys, string>;

export interface CreditCardInputProps {
  name: CreditCardKeys;
  creditCard: CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<CreditCard>>;
}
