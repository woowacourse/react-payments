export type CardNumbersType = [string, string, string, string];

export type CardInfoType = {
  cardNumbers: CardNumbersType;
  expiryMonth: string;
  expiryYear: string;
};

export type CardInfoHandlersType = {
  setCardNumbers: (value: CardNumbersType) => void;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
};
