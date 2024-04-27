type ButtonSize = 'full' | 'l' | 'm' | 's';

type CardState = 'front' | 'back';

type InputStates = InputState[];

interface InputState {
  hasError: boolean;
  hasFocus: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

type CardCompany = keyof COMPANY_TABLE;

interface CardInfo {
  cardNumbers: {
    value: string[];
    isComplete: boolean;
  };
  cardBrand: { value: CardBrand; isComplete: boolean };
  cardCompany: {
    value: CardCompany;
    isComplete: boolean;
  };
  expiration: {
    value: string[];
    isComplete: boolean;
  };
  name: { value: string; isComplete: boolean };
  cvc: { value: string; isComplete: boolean };
  password: { value: string; isComplete: boolean };
}

type CardInfoAction =
  | { type: 'SET_CARD_NUMBERS_VALUE'; value: string[] }
  | { type: 'SET_CARD_NUMBERS_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_BRAND_VALUE'; value: CardBrand }
  | { type: 'SET_CARD_BRAND_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_COMPANY_VALUE'; value: CardCompany }
  | { type: 'SET_CARD_COMPANY_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_EXPIRATION_VALUE'; value: string[] }
  | { type: 'SET_CARD_EXPIRATION_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_NAME_VALUE'; value: string }
  | { type: 'SET_CARD_NAME_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_CVC_VALUE'; value: string }
  | { type: 'SET_CARD_CVC_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_PASSWORD_VALUE'; value: string }
  | { type: 'SET_CARD_PASSWORD_COMPLETED'; value: boolean };

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
