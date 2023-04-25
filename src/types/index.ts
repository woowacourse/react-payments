type CardInfo = {
  cardNumber: string;
  cardExpirationDate: string;
  cardOwnerName: string;
};

type ValidatorResponseType = { result: boolean; errorMessage: string };

type FormInputValueType = { isValid: boolean; value: string };

export type { CardInfo, ValidatorResponseType, FormInputValueType };
