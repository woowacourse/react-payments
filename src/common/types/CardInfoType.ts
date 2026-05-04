export type CardNumberChunkType = [string, string, string, string];

export type CardInfoType = {
  cardNumbers: CardNumberChunkType;
  expiryMonth: string;
  expiryYear: string;
};

export type CardInfoHandlersType = {
  setCardNumbers: (value: CardNumberChunkType) => void;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
};
