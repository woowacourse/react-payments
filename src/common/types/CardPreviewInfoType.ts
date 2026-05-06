export type CardPreviewInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
};

export type CardFormHandlersType = {
  setCardNumbers: (value: string[]) => void;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
};
