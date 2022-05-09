interface CardInfo {
  id?: number;
  cardType: CardType;
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  userName: string;
  securityCode: string;
  password: Password;
}

interface CardInfoWithCardName extends CardInfo {
  cardName: string;
}

type CardType = {
  name: CardName;
  color: CardColor;
};

type CardName =
  | "빨강 카드"
  | "파랑 카드"
  | "오렌지 카드"
  | "토마토 카드"
  | "스카이블루 카드"
  | "보라 카드"
  | "검정 카드"
  | "초록 카드";

type CardColor = "red" | "blue" | "orange" | "tomato" | "skyblue" | "purple" | "black" | "green";

type CardNumbers = [string, string, string, string];

type Password = [string, string];

interface ExpirationDate {
  month: string;
  year: string;
}

type CardInfoValidationTarget = Omit<CardInfo, "cardType" | "userName" | "cardName">;

type CardInfoValidation = {
  [K in keyof CardInfoValidationTarget]: Validation;
};

interface Validation {
  isValid: boolean;
  successMsg: string;
  errorMsg: string | null;
}

const isCardInfo = (value: any): value is CardInfo => {
  if ("cardType" in value) return true;

  return false;
};

export type {
  CardColor,
  CardInfo,
  CardInfoValidation,
  CardInfoValidationTarget,
  CardInfoWithCardName,
  CardName,
  CardNumbers,
  CardType,
  ExpirationDate,
  Password,
  Validation,
};

export { isCardInfo };
