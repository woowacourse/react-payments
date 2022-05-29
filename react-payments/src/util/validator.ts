import { MAX_LENGTH, MAX_MONTH } from "constants/index";
import {
  CardDataType,
  CardType,
  SecurityCodeType,
  SeveralInputType,
} from "types";

export const isOverMaxLength = (target: HTMLInputElement, maxLength: number) =>
  target.value.length > maxLength;

export const isInValidExpireDate = (expireDate: SeveralInputType) =>
  Object.values(expireDate).some(
    (date) => date.length !== MAX_LENGTH.EXPIRE_DATE
  ) || Number(expireDate.month) > MAX_MONTH;

export const isInValidCardPassword = (cardPassword: SeveralInputType) =>
  Object.values(cardPassword).some(
    (password) => password.length !== MAX_LENGTH.CARD_PASSWORD
  );

export const isCompletePasswordInput = (cardPassword: SeveralInputType) =>
  Object.values(cardPassword).every(
    (password) => Number(password) >= MAX_LENGTH.CARD_PASSWORD
  );

export const isInValidCardNumber = (cardNumber: SeveralInputType) =>
  Object.values(cardNumber).some(
    (number) => number.length !== MAX_LENGTH.CARD_NUMBER
  );

export const isInValidCardType = (cardType: CardType) =>
  cardType === "defaultCard";

export const isInValidSecurityCode = (securityCode: SecurityCodeType) =>
  securityCode.length !== MAX_LENGTH.SECURITY_CODE;

export const isAllInputReady = ({
  cardNumberReady,
  expireDateReady,
  securityCodeReady,
  cardPasswordReady,
  cardTypeReady,
}: {
  [key: string]: boolean;
}) => {
  return !(
    cardNumberReady &&
    expireDateReady &&
    securityCodeReady &&
    cardPasswordReady &&
    cardTypeReady
  );
};

export const isInvalidCardName = (cardName: string) =>
  cardName.length === 0 || cardName.length > MAX_LENGTH.CARD_NAME;

export const isDuplicatedCardName = (
  newCardName: string,
  cardData: CardDataType
) =>
  Object.entries(cardData).some(
    ([_, { cardName }]) => cardName === newCardName
  );

export const isEdit = (id: undefined | string) => typeof id !== "undefined";
