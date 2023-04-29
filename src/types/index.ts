export type CardInfo = {
  cardNumber: string;
  expirationDate: string;
  cardOwnerName: string;
  selectedCard: string;
  cardNickName: string;
};

export type CardInfoContextType = {
  cardNumber: string;
  setCardNumber: (cardNumber: string) => void;
  expirationDate: string;
  setExpirationDate: (expirationDate: string) => void;
  cardOwnerName: string;
  setCardOwnerName: (cardOwnerName: string) => void;
  securityCode: string;
  setSecurityCode: (securityCode: string) => void;
  firstDigit: string;
  setFirstDigit: (firstDigit: string) => void;
  secondDigit: string;
  setSecondDigit: (secondDigit: string) => void;
  selectedCard: string;
  setSelectedCard: (selectedCard: string) => void;
  cardNickName: string;
  setCardNickName: (cardNickName: string) => void;
};
