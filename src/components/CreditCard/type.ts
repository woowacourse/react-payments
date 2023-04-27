import * as Type from '@Types/index';

export type CreditCardProps = {
  fullFilled?: boolean;
  creditCard: Pick<Type.CreditCard, 'numbers' | 'expiry' | 'owner' | 'company'>;
};

export type CreditCardLayoutStyleProps = {
  isValid: boolean;
  backgroundColor?: string;
  fontColor?: string;
};
