import * as Type from '@Types/index';

export type CreditCardProps = Pick<Type.CreditCard, 'numbers' | 'expiry' | 'owner' | 'company'> & {
  fullFilled?: boolean;
};

export type CreditCardLayoutStyleProps = {
  isValid: boolean;
  backgroundColor?: string;
  fontColor?: string;
};
