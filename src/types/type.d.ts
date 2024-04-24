type CardState = 'front' | 'back';

type InputStates = InputState[];

interface InputState {
  hasError: boolean;
  hasFocus: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

type CardCompany = keyof typeof COMPANY_TABLE;

interface CardInfo {
  cardNumbers: {
    value: [string, string, string, string];
    isComplete: boolean;
    errorMessage: string;
  };
  cardBrand: { value: CardBrand; isComplete: boolean; errorMessage: string };
  cardCompany: {
    value: CardCompany;
    isComplete: boolean;
    errorMessage: string;
  };
  expiration: { value: Expiration; isComplete: boolean; errorMessage: string };
  name: { value: string; isComplete: boolean; errorMessage: string };
  cvc: { value: string; isComplete: boolean; errorMessage: string };
  password: { value: string; isComplete: boolean; errorMessage: string };
}

type CardInfoAction =
  | { type: 'SET_CARD_NUMBERS_VALUE'; value: string[] }
  | { type: 'SET_CARD_NUMBERS_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_NUMBERS_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_BRAND_VALUE'; value: CardBrand }
  | { type: 'SET_CARD_BRAND_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_BRAND_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_COMPANY_VALUE'; value: CardCompany }
  | { type: 'SET_CARD_COMPANY_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_COMPANY_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_EXPIRATION_VALUE'; value: Expiration }
  | { type: 'SET_CARD_EXPIRATION_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_NAME_VALUE'; value: string }
  | { type: 'SET_CARD_NAME_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_NAME_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_CVC_VALUE'; value: string }
  | { type: 'SET_CARD_CVC_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_CVC_ERROR_MESSAGE'; value: string }
  | { type: 'SET_CARD_PASSWORD_VALUE'; value: string }
  | { type: 'SET_CARD_PASSWORD_COMPLETED'; value: boolean }
  | { type: 'SET_CARD_PASSWORD_ERROR_MESSAGE'; value: string };

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
