import { STATE_KEY, CARD_INPUT } from "../constants";
import { isCardCompany } from "./cardCompany";

export const isAllTextFilledInList = (numberTextList, length) => {
  if (!numberTextList instanceof Array) {
    return;
  }

  return numberTextList.every((value) => value.length === length);
};

export const isAllTextFilledInObject = (numberTextObject, length) => {
  if (!numberTextObject instanceof Object) {
    return;
  }

  return Object.values(numberTextObject).every((value) => value.length === length);
};

export const isNumberText = (text) => {
  return !Number.isNaN(Number(text));
};

export const isCorrectCardNumber = (cardNumber) => {
  return (
    Object.values(cardNumber).every((value) => isNumberText(value)) &&
    isAllTextFilledInObject(cardNumber, CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)
  );
};

export const isCorrectCardExpiration = (cardExpiration) => {
  return (
    isAllTextFilledInObject(cardExpiration, CARD_INPUT.CARD_EXPIRATION_TEXT_LENGTH) &&
    cardExpiration.expirationMonth.match(/0[1-9]|1[0-2]/) &&
    cardExpiration.expirationYear.match(/2[0-9]/)
  );
};

export const isCorrectCardPassword = (cardPassword) => {
  return (
    cardPassword.length === CARD_INPUT.CARD_PASSWORD_LIST_LENGTH &&
    cardPassword.every((value) => typeof value === "string" && value.length === 1)
  );
};

export const isAllCardInputCorrect = (cardInput) => {
  return (
    isCardCompany(cardInput[STATE_KEY.CARD_COMPANY]) &&
    isCorrectCardNumber(cardInput[STATE_KEY.CARD_NUMBER]) &&
    isCorrectCardExpiration(cardInput[STATE_KEY.CARD_EXPIRATION]) &&
    cardInput[STATE_KEY.CARD_OWNER].length !== 0 &&
    cardInput[STATE_KEY.CARD_CVC].length === CARD_INPUT.CARD_CVC_TEXT_LENGTH &&
    isCorrectCardPassword(cardInput[STATE_KEY.CARD_PASSWORD])
  );
};

export const isSameCardNumber = (cardNumber, comparedCardNumber) => {
  return Object.values(cardNumber).join("") === Object.values(comparedCardNumber).join("");
};
