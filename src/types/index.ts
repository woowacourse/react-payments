type CardInfo = {
  cardIssuer: CardIssuerType;
  cardNumber: string;
  cardExpirationDate: string;
  cardOwnerName: string;
  cardSecurityCode: string;
  cardPassword: string;
  cardName?: string;
};

type ValidatorResponseType = { result: boolean; errorMessage: string };

type FormInputValueType = { isValid: boolean; value: string };

type CardIssuerType =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

export type { CardInfo, ValidatorResponseType, FormInputValueType, CardIssuerType };
