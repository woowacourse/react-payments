import { MAX_LENGTH, MAX_MONTH } from "../constants";
import {
  CardData,
  CardNumber,
  CardPassword,
  ExpireDate,
  SecurityCode,
} from "../types";

export const isOverMaxLength = (target: HTMLInputElement, maxLength: number) =>
  target.value.length > maxLength;

export const isInValidExpireDate = (expireDate: ExpireDate) =>
  Object.values(expireDate).some(
    (date) => date.length !== MAX_LENGTH.EXPIRE_DATE
  ) || Number(expireDate.month) > MAX_MONTH;

export const isInValidCardPassword = (cardPassword: CardPassword) =>
  Object.values(cardPassword).some(
    (password) => password.length !== MAX_LENGTH.CARD_PASSWORD
  );

export const isCompletePasswordInput = (cardPassword: CardPassword) =>
  Object.values(cardPassword).every(
    (password) => password >= MAX_LENGTH.CARD_PASSWORD
  );

export const isInValidCardNumber = (cardNumber: CardNumber) =>
  Object.values(cardNumber).some(
    (number) => number.length !== MAX_LENGTH.CARD_NUMBER
  );

export const isInValidCardType = (cardType: string) =>
  cardType === "defaultCard";

export const isInValidSecurityCode = (securityCode: SecurityCode) =>
  securityCode.length !== MAX_LENGTH.SECURITY_CODE;

interface ReadyGroup {
  cardNumberReady: boolean;
  expireDateReady: boolean;
  securityCodeReady: boolean;
  cardPasswordReady: boolean;
  cardTypeReady: boolean;
}

export const isAllInputReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardTypeReady,
}: ReadyGroup) => {
  return !(
    cardNumberReady &&
    expireDateReady &&
    securityCodeReady &&
    cardPasswordReady &&
    cardTypeReady
  );
};

export const isInValidCardName = (cardName: string) =>
  cardName.length === 0 || cardName.length > MAX_LENGTH.CARD_NAME;

export const isDuplicatedCardName = (
  newCardName: string,
  cardData: CardData[]
) => cardData.some(({ cardName }) => cardName === newCardName);
