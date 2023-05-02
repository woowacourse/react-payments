import {
  CARD_COMPANY_NOT_SELECTED_STRING,
  REGEX,
  SEPERATED_CARD_NUMBER_LENGTH,
  SEPERATED_EXPIRED_DATE_LENGTH,
  SEPERATOR_STRING,
} from "../constants";
import { CardType } from "../types";

export const getEmptyCard = (): CardType => ({
  cardNumber: "",
  expiredDate: "",
  ownerName: "",
  cvc: "",
  password: ["", ""],
  cardCompany: CARD_COMPANY_NOT_SELECTED_STRING,
  name: "",
});

export const getReplacedCardNumber = (cardNumber: string) => {
  return cardNumber.length > SEPERATED_CARD_NUMBER_LENGTH.SECOND
    ? cardNumber.substring(0, 12) +
        cardNumber
          .substring(12, cardNumber.length)
          .replaceAll(REGEX.globalNumber, "•")
    : cardNumber;
};

export const getSeperatedCardNumber = (cardNumber: string) => {
  return cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST ||
    cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND ||
    cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD
    ? cardNumber + SEPERATOR_STRING.cardNumber
    : cardNumber;
};

export const getCardNumberArray = (cardNumber: string) => {
  return cardNumber.replaceAll(SEPERATOR_STRING.cardNumber, " ").split(" ");
};

export const getSubCardNumber = (cardNumber: string) => {
  if (cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST + 3)
    return cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.FIRST);
  if (cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND + 3)
    return cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.SECOND);
  if (cardNumber.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD + 3)
    return cardNumber.substring(0, SEPERATED_CARD_NUMBER_LENGTH.THIRD);
  return cardNumber;
};

export const getSeperatedExpiredDate = (expiredDate: string) => {
  return expiredDate.length === SEPERATED_EXPIRED_DATE_LENGTH
    ? expiredDate + SEPERATOR_STRING.expiredDate
    : expiredDate;
};

export const getSubExpiredDate = (expiredDate: string) => {
  return expiredDate.length === 5
    ? expiredDate.substring(0, SEPERATED_EXPIRED_DATE_LENGTH)
    : expiredDate;
};
