export type CardNumberGroups = "firstGroup" | "secondGroup" | "thirdGroup" | "fourthGroup";
export type CardNumber = Record<CardNumberGroups, string>;

export type CardExpirationDateKey = "month" | "year";
export type CardExpirationDate = Record<CardExpirationDateKey, string>;

export type CardPasswordKey = "first" | "second";
export type CardPassword = Record<CardPasswordKey, string>;

export type CardCompany = "BC" | "SHINHAN" | "HANA" | "HYUNDAI" | "KAKAO" | "KB" | "LOTTE" | "WOORI";

export type Card = {
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
  cardCompany: CardCompany;
};
