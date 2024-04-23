type InputStates = InputState[];

interface InputState {
  hasError: boolean;
  hasFocus: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

type CardCompany = keyof typeof COMPANY_TABLE;

interface CardInfo {
  cardNumbers: [string, string, string, string];
  cardBrand: CardBrand;
  cardCompany: CardCompany;
  expirationMonth: string;
  expirationYear: string;
  name: string;
  cvc: string;
  password: string;
}

interface Expiration {
  [index: string]: string;
  month: string;
  year: string;
}

interface CardAnimationProps {
  left: number;
  top: number;
  centerX: number;
  centerY: number;
  distance: number;
}
