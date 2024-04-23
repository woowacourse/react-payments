type InputStates = InputState[];

interface InputState {
  hasError: boolean;
  hasFocus: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

type CardCompany = keyof typeof COMPANY_TABLE;

interface CardInfo {
  cardNumbers: { value: [string, string, string, string]; isComplete: boolean };
  cardBrand: { value: CardBrand; isComplete: boolean };
  cardCompany: { value: CardCompany; isComplete: boolean };
  expiration: { value: Expiration; isComplete: boolean };
  name: { value: string; isComplete: boolean };
  cvc: { value: string; isComplete: boolean };
  password: { value: string; isComplete: boolean };
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
